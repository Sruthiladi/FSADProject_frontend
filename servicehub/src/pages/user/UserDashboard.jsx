import Navbar from "../../components/Navbar";

const UserDashboard = () => {
  return (
    <>
      <Navbar role="user" />

      {/* HERO SECTION ONLY */}
      <section className="user-hero">
        <h1>Find the Perfect Professional for Any Service</h1>
        <p>
          Connect with trusted experts across thousands of categories.
          Quality service, guaranteed.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="What service are you looking for?"
          />
          <button
  onClick={() =>
    navigate(`/user/services?search=${searchText}`)
  }
>
  Search
</button>
        </div>

        <div className="hero-features">
          <span>✔ Verified Professionals</span>
          <span>★ Top Rated Services</span>
          <span>👥 24/7 Support</span>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;