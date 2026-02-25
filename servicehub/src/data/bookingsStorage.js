// src/data/bookingsStorage.js

const STORAGE_KEY = "servicehub_bookings";

export const getBookings = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveBooking = (booking) => {
  const bookings = getBookings();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...bookings, booking])
  );
};

export const updateBookings = (updatedBookings) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
};