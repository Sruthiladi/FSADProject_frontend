import Navbar from "../../components/Navbar";

const AdminUsers = () => {
  return (
    <>
      <Navbar role="admin" />
      <div className="dashboard">
        <h1>Users Management</h1>
        <p>All registered users and professionals will be listed here.</p>
      </div>
    </>
  );
};

export default AdminUsers;