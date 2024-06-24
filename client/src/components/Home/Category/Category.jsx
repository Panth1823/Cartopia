import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg"

const Category = () => {
    return <div className="shop-by-category">
        <div className="categories">
            <div className="category">
                <img src={cat1} alt="cat1" />
            </div>
            <div className="category">
                <img src={cat1} alt="cat1" />
            </div>
            <div className="category">
                <img src={cat1} alt="cat1" />
            </div>
            <div className="category">
                <img src={cat1} alt="cat1" />
            </div>
        </div>
    </div>;
};

export default Category;
