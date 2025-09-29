import { useState, useEffect, useRef } from 'react';
import { validateReservationForm } from './validation';
import { isValidPhoneNumber, parsePhoneNumberFromString, getExampleNumber } from 'libphonenumber-js';
import { useLocation } from 'react-router-dom';


export const useReservationForm = (onSubmit) => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    people: '',
    comments: '',
    index: undefined,
  });

  const [errors, setErrors] = useState({});
  const dateRef = useRef(null);

  const [isPhoneValid, setIsPhoneValid] = useState(null);

  const [minTime, setMinTime] = useState("09:00");
  const [maxTime] = useState("23:59");

  useEffect(() => {
    const stored = localStorage.getItem('reservationToEdit');
    if (stored) {
      const reservation = JSON.parse(stored);
      setFormData(reservation); 
      localStorage.removeItem('reservationToEdit');
    }
  }, [])
  // Setup date minimum and time boundaries logic
  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];

    if (dateRef.current) {
      dateRef.current.setAttribute('min', formattedToday);
    }

    const updateMinTime = () => {
      const selectedDate = dateRef.current?.value;
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      if (selectedDate === formattedToday) {
        setMinTime(currentTime < "09:00" ? "09:00" : currentTime);
      } else {
        setMinTime("09:00");
      }
    };

    if (dateRef.current) {
      dateRef.current.addEventListener('change', updateMinTime);
    }

    updateMinTime();

    return () => {
      const dateEl = dateRef.current;
      if (dateEl) {
        dateEl.removeEventListener('change', updateMinTime);
      }
    };
  }, [dateRef]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, contact: `+${value}` }));   

    try {
        const phoneNumber = parsePhoneNumberFromString(`+${value}`);
        if (phoneNumber && phoneNumber.isValid()) {
          setIsPhoneValid(true);
        } else {
          setIsPhoneValid(false);
        }
      } catch {
        setIsPhoneValid(false);
      }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const RESERVATION_DURATION_MINUTES = 120;

    const phoneNumber = parsePhoneNumberFromString(formData.contact);

    if (!phoneNumber || !isValidPhoneNumber(formData.contact)) {
    setErrors({ contact: 'Invalid phone number' });
    return false;
}

    const validationErrors = validateReservationForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const existingReservations = JSON.parse(localStorage.getItem('reservations')) || [];

    const newStart = new Date(`${formData.date}T${formData.time}`);
    const newEnd = new Date(newStart.getTime() + RESERVATION_DURATION_MINUTES * 60000);
  
    function intervalsOverlap(start1, end1, start2, end2) {
      return start1 < end2 && start2 < end1;
    }
  
    const totalPeopleInOverlap = existingReservations.reduce((sum, r) => {
      const existingStart = new Date(`${r.date}T${r.time}`);
      const existingEnd = new Date(existingStart.getTime() + RESERVATION_DURATION_MINUTES * 60000);
  
      if (intervalsOverlap(existingStart, existingEnd, newStart, newEnd)) {
        return sum + Number(r.people);
      }
      return sum;
    }, 0);
  
    const newTotal = totalPeopleInOverlap + Number(formData.people);
  
    if (newTotal > 50) {
      alert("⛔ The restaurant has reached its maximum capacity of 50 guests for the selected time slot. Please try booking for a different time.");
      return;
    }

    setErrors({});
    e.target.reset();

    onSubmit(formData);
  };

  return {
    formData,
    errors,
    isPhoneValid,
    dateRef,
    minTime,
    maxTime,
    handleChange,
    handlePhoneChange,
    handleSubmit,
  };
};




