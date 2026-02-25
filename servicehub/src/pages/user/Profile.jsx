import Navbar from "../../components/Navbar";
import { useState } from "react";

const Profile = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submitTicket = (e) => {
    e.preventDefault();

    const tickets =
      JSON.parse(localStorage.getItem("supportTickets")) || [];

    const newTicket = {
      id: Date.now(),
      subject,
      message,
      status: "Open",
      createdAt: new Date().toLocaleString()
    };

    localStorage.setItem(
      "supportTickets",
      JSON.stringify([...tickets, newTicket])
    );

    setSuccess(true);
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <Navbar role="user" />

      <div className="dashboard">
        
        <p className="page-subtitle">
          Need help? Submit a support ticket and we’ll get back to you.
        </p>

        {/* SUPPORT TICKET FORM */}
        <div className="support-card">
          <h2>Raise a Support Ticket</h2>

          {success && (
            <p className="success-text">
              ✅ Your ticket has been submitted successfully!
            </p>
          )}

          <form onSubmit={submitTicket}>
            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter ticket subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <label>Message</label>
            <textarea
              placeholder="Describe your issue"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button className="primary-btn" type="submit">
              Submit Ticket
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="support-card">
          <h2>Contact Information</h2>
          <p><b>Email:</b> support@servicehub.com</p>
          <p><b>Phone:</b> +91 98765 43210</p>
        </div>
      </div>
    </>
  );
};

export default Profile;