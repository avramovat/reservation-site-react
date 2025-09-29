const STORAGE_KEY = 'reservations';

export const loadReservations = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveReservations = (reservations) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};
