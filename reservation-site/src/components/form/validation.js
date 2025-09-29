export const validateReservationForm = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Name is required.";
    if (!data.contact || !/^\+\d{6,15}$/.test(data.contact)) errors.contact = "Valid phone number required.";
    if (!data.date) errors.date = "Date is required.";
    if (!data.time) errors.time = "Time is required.";
    if (!data.people || isNaN(data.people) || Number(data.people) <= 0) errors.people = "Enter valid number of people.";
    if (data.date && data.time) {
        const now = new Date();
        const selected = new Date(`${data.date}T${data.time}`);

        if (selected < now) {
            errors.datetime = "Reservation cannot be in the past.";
        }
    }
    return errors;
  };
  


   

  