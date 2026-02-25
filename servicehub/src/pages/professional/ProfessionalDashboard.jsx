import Navbar from "../../components/Navbar";
import "./ProfessionalDashboard.css";

const ProfessionalDashboard = () => {
  return (
    <>
      <Navbar role="professional" />

      <div className="pro-dashboard">
        {/* HEADER */}
        <div className="pro-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's your performance summary.</p>
        </div>

        {/* STATS */}
        <div className="pro-stats">
          <div className="stat-card">
            <p>Total Earnings</p>
            <h2>₹0</h2>
            <span className="positive">+12.5% from last month</span>
          </div>

          <div className="stat-card">
            <p>Active Jobs</p>
            <h2>0</h2>
          </div>

          <div className="stat-card">
            <p>Pending Requests</p>
            <h2>1</h2>
          </div>

          <div className="stat-card">
            <p>Average Rating</p>
            <h2>4.9 ⭐</h2>
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="pro-grid">
          {/* RECENT REQUESTS */}
          <div className="pro-box">
            <h3>Recent Requests</h3>

            <div className="request-item">
              <div>
                <h4>Full Stack Web Application</h4>
                <p>by John Smith</p>
                <small>2026-02-25 at 10:00 AM</small>
              </div>

              <div className="request-meta">
                <span className="price">₹5000</span>
                <span className="badge pending">Pending</span>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="pro-box">
            <h3>Recent Activity</h3>

            <ul className="activity-list">
              <li>
                <span className="dot"></span>
                New request: Full Stack Web Application
                <br />
                <small>2026-02-25</small>
              </li>
            </ul>
          </div>
        </div>

        {/* PERFORMANCE */}
        <div className="pro-performance">
          <h3>This Month's Performance</h3>

          <div className="performance-grid">
            <div>
              <p>Total Jobs</p>
              <h2>1</h2>
            </div>
            <div>
              <p>Response Rate</p>
              <h2>98%</h2>
            </div>
            <div>
              <p>Completion Rate</p>
              <h2>96%</h2>
            </div>
            <div>
              <p>Client Satisfaction</p>
              <h2>4.9 / 5</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalDashboard;