import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./ProfessionalProfile.css";

const ProfessionalProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Sarah Johnson",
    title: "Senior Web Developer",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    rate: 85,
    about:
      "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies. Specialized in building scalable web applications.",
      photo: "",
  });

  const [skills, setSkills] = useState([
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Docker",
  ]);

  const [availability, setAvailability] = useState("Available Now");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Navbar role="professional" />

      <div className="profile-container">
        {/* HEADER */}
        <div className="profile-header">
          <div>
            <h1>Profile Management</h1>
            <p>Manage your professional profile and information</p>
          </div>
          <button className="edit-btn" onClick={toggleEdit}>
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* TOP SECTION */}
        <div className="profile-grid">
         {/* PROFILE CARD */}
{/* PROFILE CARD */}
<div className="profile-card">
  <div className="profile-card-header">
    <h3>Profile Photo</h3>
  </div>

  <div className="profile-photo-container">
    <div className="profile-photo-wrapper">
      <img
        src={profile.photo || "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"}
        alt="Profile"
        className="profile-photo"
      />
      <label className={`photo-edit-btn ${!isEditing ? "disabled" : ""}`}>
        📷
        <input
          type="file"
          accept="image/*"
          hidden
          disabled={!isEditing}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const preview = URL.createObjectURL(file);
              setProfile({ ...profile, photo: preview });
            }
          }}
        />
      </label>
    </div>

    {/* NAME & TITLE - Now explicitly positioned below the wrapper */}
    <div className="profile-info-summary">
      <h2 className="user-name">{profile.name}</h2>
      <p className="user-title">{profile.title}</p>
    </div>
  </div>
</div>
          {/* BASIC INFO */}
          <div className="info-card">
            <h3>Basic Information</h3>

            <div className="info-grid">
              <div>
                <label>Full Name</label>
                <input
                  name="name"
                  value={profile.name}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Professional Title</label>
                <input
                  name="title"
                  value={profile.title}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  name="email"
                  value={profile.email}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Phone</label>
                <input
                  name="phone"
                  value={profile.phone}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>

              <div className="full">
                <label>Location</label>
                <input
                  name="location"
                  value={profile.location}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>

              <div className="full">
                <label>Hourly Rate ($)</label>
                <input
                  name="rate"
                  type="number"
                  value={profile.rate}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="section-card">
          <h3>About</h3>
          <textarea
            name="about"
            value={profile.about}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        {/* SKILLS */}
        <div className="section-card">
          <h3>Skills & Expertise</h3>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill} ✕
              </span>
            ))}
            <button className="add-skill" disabled={!isEditing}>
              + Add Skill
            </button>
          </div>
        </div>

        {/* AVAILABILITY */}
        <div className="section-card">
          <h3>Availability</h3>
          <div className="availability">
            {["Available Now", "Currently Busy", "Unavailable"].map(
              (status) => (
                <label key={status}>
                  <input
                    type="radio"
                    disabled={!isEditing}
                    checked={availability === status}
                    onChange={() => setAvailability(status)}
                  />
                  {status}
                </label>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalProfile;