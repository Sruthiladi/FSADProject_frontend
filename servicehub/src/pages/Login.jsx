import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("role", role);

    if (role === "user") navigate("/user/dashboard");
    else if (role === "professional") navigate("/professional/dashboard");
    else if (role === "admin") navigate("/admin/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>

        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="professional">Professional</option>
          <option value="admin">Admin</option>
        </select>

        <button className="primary-btn" onClick={handleLogin}>
          Login
        </button>

        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;