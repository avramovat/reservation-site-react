
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationTable from '../components/reservations/reservationTable';
import Reminder from '../components/reservations/reminder';
import { loadReservations, saveReservations } from '../utils/storage';
import { deleteReservation } from '../utils/crud';
import bgImg from '../assets/nerfee-mirandilla-o1EDsUFmuXQ-unsplash.jpg';
import { FaHome, FaPlus } from 'react-icons/fa';
import {
  BackgroundWrapper,
  NavButton,
  Button,
  ReservationsPageWrapper,
  TopBar
} from '../styles/components/Reservations';

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [showReminder, setShowReminder] = useState(false);
  const [reminderReservation, setReminderReservation] = useState(null);
  const navigate = useNavigate();

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  useEffect(() => {
    const res = loadReservations();
    setReservations(res);

    const today = new Date().toISOString().split('T')[0];
    const match = res.find(r => r.date === today);
    if (match) {
      setReminderReservation(match);
      setShowReminder(true);
    }
  }, []);

  const handleDelete = (index) => {
    const updated = deleteReservation(index, reservations);
    setReservations(updated);
    saveReservations(updated);
  };

  const handleEdit = (index) => {
    const reservationToEdit = { ...reservations[index], index };
    localStorage.setItem('reservationToEdit', JSON.stringify(reservationToEdit));
    navigate('/form');
  };

  const handleNewReservation = () => {
    localStorage.removeItem('reservationToEdit');
    navigate('/form');
  };

  return (
    <ReservationsPageWrapper>
      <BackgroundWrapper style={bgStyle}>
        <TopBar>
          <NavButton onClick={() => navigate('/')}>
            <FaHome />
          </NavButton>
          <NavButton onClick={handleNewReservation}>
            <FaPlus />
          </NavButton>
          </TopBar>

        <ReservationTable
          reservations={reservations}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {showReminder && reminderReservation && (
          <Reminder
            reservation={reminderReservation}
            onDismiss={() => setShowReminder(false)}
          />
        )}
      </BackgroundWrapper>
    </ReservationsPageWrapper>
  );
}
