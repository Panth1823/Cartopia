import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerpage, headingText }) => {
  return (
    <div className="products-container">
      {!innerpage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
