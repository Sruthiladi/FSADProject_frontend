import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar role="admin" />
      <div className="dashboard">
        <h1>Admin Dashboard</h1>

        <div className="card-grid">
          <div className="card">Total Users</div>
          <div className="card">Professionals</div>
          <div className="card">Listed Services</div>
          <div className="card">Platform Activity</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;