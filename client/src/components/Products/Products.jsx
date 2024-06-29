import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ products, innerpage, headingText }) => {
  return (
    <div className="products-container">
      {!innerpage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={String(item.id)} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
