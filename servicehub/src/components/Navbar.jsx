import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">ServiceHub</h2>

      <ul className="nav-links">
        {role === "user" && (
  <>
    <li>
      <NavLink to="/user/home">Home</NavLink>
    </li>
    <li>
      <NavLink to="/user/categories">Categories</NavLink>
    </li>
    <li>
      <NavLink to="/user/services">Browse Services</NavLink>
    </li>
    <li>
      <NavLink to="/user/bookings">My Bookings</NavLink>
    </li>
    <li>
  <NavLink to="/user/profile">Help & Support</NavLink>
</li>
  </>
)}

        {role === "professional" && (
  <>
    <li>
      <NavLink to="/professional/dashboard">Overview</NavLink>
    </li>
    <li>
      <NavLink to="/professional/services">My Services</NavLink>
    </li>
    <li>
      <NavLink to="/professional/requests">Requests</NavLink>
    </li>
    <li>
      <NavLink to="/professional/profile">My Profile</NavLink>
    </li>
  </>
)}

        {role === "admin" && (
  <>
    <li>
      <NavLink to="/admin/dashboard">Platform Overview</NavLink>
    </li>
    <li>
      <NavLink to="/admin/users">Users</NavLink>
    </li>
    <li>
      <NavLink to="/admin/services">Services</NavLink>
    </li>
    <li>
      <NavLink to="/admin/reports">Reports</NavLink>
    </li>
  </>
)}
      </ul>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;