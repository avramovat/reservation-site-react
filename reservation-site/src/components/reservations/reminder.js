import React from 'react';
import { ReminderContainer, DismissButton } from '../../styles/components/Reminder'; 

export default function Reminder({ reservation, onDismiss }) {
  return (
    <ReminderContainer>
      <h3>You have a reservation today!</h3>
      <p><strong>{reservation.name}</strong></p>
      <p>Time: {reservation.time}</p>
      <p>People: {reservation.people}</p>
      <p>Contact: {reservation.contact}</p>
      {reservation.comments && <p>Comments: {reservation.comments}</p>}
      <DismissButton onClick={onDismiss}>Dismiss</DismissButton>
      <p className="contact-restaurant">Need help? Call: <strong>+389 70 123 456</strong></p>
    </ReminderContainer>
  );
}
