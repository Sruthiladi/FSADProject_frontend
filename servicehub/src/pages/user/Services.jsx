import Navbar from "../../components/Navbar";
import servicesData from "../../data/servicesData";
import { useState } from "react";
import { saveBooking } from "../../data/bookingsStorage";

const Services = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [booking, setBooking] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [payment, setPayment] = useState("");

  const categories = [
    "All",
    "Electricians",
    "Plumbers",
    "Education",
    "Design",
    "Health & Fitness"
  ];

  const filtered = servicesData.filter((p) =>
    (category === "All" || p.category === category) &&
    (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.role.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleConfirmBooking = () => {
    const newBooking = {
      id: Date.now(),
      name: booking.name,
      role: booking.role,
      location: booking.location,
      service: selectedService,
      date,
      time,
      payment,
      price: booking.price,
      status: "Upcoming"
    };

    saveBooking(newBooking);

    alert("✅ Booking Confirmed!");

    setBooking(null);
    setDate("");
    setTime("");
    setPayment("");
  };

  return (
    <>
      <Navbar role="user" />

      <div className="dashboard">
        <h1>Search Professionals</h1>

        {/* SEARCH BAR */}
        <div className="search-box">
          <input
            placeholder="Search by name or profession"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ border: "none", padding: "0 14px", fontSize: "16px" }}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <button>Search</button>
        </div>

        {/* PROFESSIONAL LIST */}
        <div className="profile-list">
          {filtered.map((p) => (
            <div key={p.id} className="profile-card">
              <div className="profile-left">
                <img src={p.image} alt={p.name} className="profile-img" />

                <div className="profile-info">
                  <h3>{p.name}</h3>
                  <p className="profile-role">{p.role} – {p.location}</p>
                  <p>{p.description}</p>
                  <p><b>Services:</b> {p.services.join(", ")}</p>
                  <p><b>Rating:</b> ⭐ {p.rating}</p>
                </div>
              </div>

              <div className="profile-action">
                <div className="price">₹{p.price}/hr</div>
                <button
                  className="primary-btn"
                  onClick={() => {
                    setBooking(p);
                    setSelectedService(p.services[0]);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOOKING MODAL */}
      {booking && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Book {booking.name}</h2>

            <label>Service</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              {booking.services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <label>Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

            <label>Time</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

            <label>Payment Method</label>
            <select value={payment} onChange={(e) => setPayment(e.target.value)}>
              <option value="">Select</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
            </select>

            <button
              className="primary-btn"
              disabled={!date || !time || !payment}
              onClick={handleConfirmBooking}
            >
              Proceed to Pay
            </button>

            <button className="secondary-btn" onClick={() => setBooking(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;