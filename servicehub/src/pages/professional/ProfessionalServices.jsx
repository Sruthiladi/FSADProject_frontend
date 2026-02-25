import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./ProfessionalDashboard.css";

const ProfessionalServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Full Stack Web Application",
      description:
        "Complete web application development with React frontend and Node.js backend",
      duration: "4-6 weeks",
      price: 5000,
    },
    {
      id: 2,
      title: "Website Bug Fixes",
      description:
        "Quick bug fixes and maintenance for existing websites",
      duration: "1-2 days",
      price: 200,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addService = () => {
    if (!form.title || !form.price) return;

    setServices([
      ...services,
      {
        id: Date.now(),
        ...form,
        price: Number(form.price),
      },
    ]);

    setForm({ title: "", description: "", duration: "", price: "" });
    setShowModal(false);
  };

  const deleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <>
      <Navbar role="professional" />

      <div className="services-container">
        <div className="services-header">
          <div>
            <h1>Service Listings</h1>
            <p>Manage the services you offer to clients</p>
          </div>
          <button className="add-btn" onClick={() => setShowModal(true)}>
            + Add Service
          </button>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-header">
                <h3>{service.title}</h3>
                <button
  className="delete-btn"
  title="Delete service"
  onClick={() => deleteService(service.id)}
>
  ✕
</button>
              </div>

              <p className="description">{service.description}</p>

              <div className="card-footer">
                <div>
                  <span>Duration</span>
                  <strong>{service.duration}</strong>
                </div>
                <div className="price">${service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Service</h2>
              <button onClick={() => setShowModal(false)}>✕</button>
            </div>

            <input
              name="title"
              placeholder="Service Title"
              value={form.title}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Describe what this service includes..."
              value={form.description}
              onChange={handleChange}
            />

            <div className="modal-row">
              <input
                name="price"
                type="number"
                placeholder="Price ($)"
                value={form.price}
                onChange={handleChange}
              />
              <input
                name="duration"
                placeholder="Duration (e.g., 2-3 weeks)"
                value={form.duration}
                onChange={handleChange}
              />
            </div>

            <div className="modal-actions">
              <button
                className="cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="save" onClick={addService}>
                Add Service
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfessionalServices;