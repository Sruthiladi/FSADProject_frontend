import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./ProfessionalDashboard.css";

const ProfessionalRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      client: "John Smith",
      service: "Full Stack Web Application",
      date: "2026-02-25",
      time: "10:00 AM",
      price: 5000,
      status: "Pending",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [message, setMessage] = useState("");

  const updateStatus = (id, newStatus) => {
    const confirmed = window.confirm(
      `Are you sure you want to ${newStatus.toLowerCase()} this request?`
    );

    if (!confirmed) return;

    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );

    setMessage(`Request ${newStatus.toLowerCase()} successfully`);

    setTimeout(() => setMessage(""), 3000);
  };

  const filteredRequests =
    filter === "All"
      ? requests
      : requests.filter((req) => req.status === filter);

  return (
    <>
      <Navbar role="professional" />

      <div className="requests-container">
        <div className="requests-header">
          <div>
            <h1>Client Requests</h1>
            <p>Manage incoming booking requests from clients</p>
          </div>

          <select
            className="filter-dropdown"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Requests</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/* Confirmation Message */}
        {message && <div className="action-message">{message}</div>}

        <div className="requests-table">
          <div className="table-head">
            <span>Client</span>
            <span>Service</span>
            <span>Date & Time</span>
            <span>Price</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {filteredRequests.length === 0 && (
            <div className="no-data">No requests found</div>
          )}

          {filteredRequests.map((req) => (
            <div key={req.id} className="table-row">
              <div className="client-cell">
                <div className="avatar">{req.client.charAt(0)}</div>
                <div>
                  <strong>{req.client}</strong>
                  <p className="sub-text">Client</p>
                </div>
              </div>

              <span className="service-cell">{req.service}</span>

              <span>
                {req.date}
                <br />
                <small>{req.time}</small>
              </span>

              <strong>${req.price}</strong>

              <span className={`status ${req.status.toLowerCase()}`}>
                {req.status}
              </span>

              <div className="actions">
                <button
                  className="accept-btn"
                  disabled={req.status === "Accepted"}
                  onClick={() => updateStatus(req.id, "Accepted")}
                >
                  ✓ Accept
                </button>
                <button
                  className="reject-btn"
                  disabled={req.status === "Rejected"}
                  onClick={() => updateStatus(req.id, "Rejected")}
                >
                  ✕ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfessionalRequests;