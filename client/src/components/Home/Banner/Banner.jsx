import "./Banner.scss";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const scrollToProducts = () => {
    const productsSection = document.querySelector('.products-container');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Cartopia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima
            quos qui accusantium, aut eos.
          </p>
          <div className="ctas">
            <div className="banner-cta" onClick={() => navigate('/about')}>About Us</div>
            <div className="banner-cta v2" onClick={scrollToProducts}>Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;