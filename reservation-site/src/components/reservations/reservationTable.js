import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { TableContainer, Table, ActionButton} from '../../styles/components/ReservationTable'

export default function ReservationTable({ reservations, onEdit, onDelete }) {
  if (reservations.length === 0) {
    return <p>No reservations found.</p>;
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res, index) => (
            <tr key={index}>
              <td>{res.name}</td>
              <td>{res.contact}</td>
              <td>{res.date}</td>
              <td>{res.time}</td>
              <td>{res.people}</td>
              <td>{res.comments || '—'}</td>
              <td>
                <ActionButton type="edit" onClick={() => onEdit(index)}>
                  <FaEdit />
                </ActionButton>
                <ActionButton type="delete" onClick={() => onDelete(index)}>
                  <FaTrashAlt />
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}



