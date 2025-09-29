// pages/form.js
import React from 'react';
import ReservationForm from '../components/form/reservationForm';
import { useNavigate } from 'react-router-dom';
import { useReservationForm } from '../components/form/useReservationForm';

export default function Form() {
  const navigate = useNavigate();

  const handleReservationSubmit = (reservationData) => {
    const existingReservations = JSON.parse(localStorage.getItem('reservations')) || [];

    if (reservationData.index !== undefined) {
        const updatedReservations = existingReservations.map((r, i) =>
          i === reservationData.index ? reservationData : r
        );
        localStorage.setItem('reservations', JSON.stringify(updatedReservations));
      } else {
        existingReservations.push(reservationData);
        localStorage.setItem('reservations', JSON.stringify(existingReservations));
      }
    
    navigate('/reservations');
  }
  return (
    <div className="form-page">
<ReservationForm 
  onSubmit={handleReservationSubmit} 
/>
    </div>
  );
}



