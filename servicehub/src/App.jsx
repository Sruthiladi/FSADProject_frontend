import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* USER */
import UserDashboard from "./pages/user/UserDashboard";
import Categories from "./pages/user/Categories";
import Services from "./pages/user/Services";
import Bookings from "./pages/user/Bookings";
import Profile from "./pages/user/Profile";

/* PROFESSIONAL */
import ProfessionalDashboard from "./pages/professional/ProfessionalDashboard";
import ProfessionalServices from "./pages/professional/ProfessionalServices";
import ProfessionalRequests from "./pages/professional/ProfessionalRequests";
import ProfessionalProfile from "./pages/professional/ProfessionalProfile";

/* ADMIN */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminServices from "./pages/admin/AdminServices";
import AdminReports from "./pages/admin/AdminReports";

/* PROTECTED */
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== PUBLIC ===== */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ===== USER ===== */}
        <Route
          path="/user/home"
          element={
            <ProtectedRoute allowedRole="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/user/dashboard" element={<Navigate to="/user/home" replace />} />

        <Route
          path="/user/categories"
          element={
            <ProtectedRoute allowedRole="user">
              <Categories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/services"
          element={
            <ProtectedRoute allowedRole="user">
              <Services />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/bookings"
          element={
            <ProtectedRoute allowedRole="user">
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/profile"
          element={
            <ProtectedRoute allowedRole="user">
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ===== PROFESSIONAL ===== */}
        <Route
          path="/professional/dashboard"
          element={
            <ProtectedRoute allowedRole="professional">
              <ProfessionalDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/professional/services"
          element={
            <ProtectedRoute allowedRole="professional">
              <ProfessionalServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/professional/requests"
          element={
            <ProtectedRoute allowedRole="professional">
              <ProfessionalRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/professional/profile"
          element={
            <ProtectedRoute allowedRole="professional">
              <ProfessionalProfile />
            </ProtectedRoute>
          }
        />

        {/* ===== ADMIN ===== */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminReports />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;