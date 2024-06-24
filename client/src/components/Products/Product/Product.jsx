import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod} alt="prod" />
      </div>
      <div className="prod-details">
        <span className="name">Product name</span>
        <span className="price"> &#8377;499</span>
      </div>
    </div>
  );
};

export default Product;
