import Navbar from "../../components/Navbar";
import { getBookings, updateBookings } from "../../data/bookingsStorage";
import { useState, useEffect } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const cancelBooking = (id) => {
    if (!window.confirm("Cancel this booking?")) return;

    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Cancelled" } : b
    );

    setBookings(updated);
    updateBookings(updated);
  };

  return (
    <>
      <Navbar role="user" />

      <div className="dashboard">
       

        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <div className="bookings-list">
            {bookings.map((b) => (
              <div key={b.id} className="booking-card">
                <div>
                  <h3>{b.name}</h3>
                  <p>{b.role} – {b.location}</p>
                  <p><b>Service:</b> {b.service}</p>
                  <p><b>Date:</b> {b.date} | {b.time}</p>
                  <p><b>Price:</b> ₹{b.price}</p>
                </div>

                <div>
                  <span className={`status ${b.status.toLowerCase()}`}>
                    {b.status}
                  </span>

                  {b.status === "Upcoming" && (
                    <button
                      className="secondary-btn"
                      onClick={() => cancelBooking(b.id)}
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Bookings;