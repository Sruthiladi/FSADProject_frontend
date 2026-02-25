import Navbar from "../../components/Navbar";

const AdminServices = () => {
  return (
    <>
      <Navbar role="admin" />
      <div className="dashboard">
        <h1>Services Management</h1>
        <p>All platform services can be viewed and managed here.</p>
      </div>
    </>
  );
};

export default AdminServices;