export const addReservation = (reservation, reservations) => [
    ...reservations,
    reservation,
  ];
  
  export const editReservation = (index, updatedData, reservations) =>
    reservations.map((res, i) => (i === index ? updatedData : res));
  
  export const deleteReservation = (index, reservations) =>
    reservations.filter((_, i) => i !== index);
  