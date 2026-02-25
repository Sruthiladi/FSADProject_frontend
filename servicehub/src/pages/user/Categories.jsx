import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import categories from "../../data/categoriesData";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar role="user" />

      <div className="dashboard">
        

        <div className="categories-grid">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="category-box"
              onClick={() =>
                navigate(`/user/services?category=${cat.name}`)
              }
            >
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;