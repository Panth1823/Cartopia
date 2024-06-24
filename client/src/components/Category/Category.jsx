import "./Category.scss";
import Products from "../Products/Products"
const Category = () => {
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category title</div>
      </div>
      <Products innerpage={true}/>
    </div>
  );
};

export default Category;
