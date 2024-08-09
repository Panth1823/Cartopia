import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
// import Spline from '@splinetool/react-spline';
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return null; // Ensure we return null if data is not available
  const product = data?.data?.[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={product?.img?.data?.[0]?.attributes?.url || ""}
              alt={product?.title || "Product Image"}
            />
            {/* <Spline scene="https://prod.spline.design/tmpB9yh1smlO1luH/scene.splinecode" /> */}
          </div>
          <div className="right">
            <span className="name">{product?.title || "Product Title"}</span>
            <span className="price">
              &#8377;{product?.price ?? "Price not available"}
            </span>
            <span className="desc">
              {product?.desc || "No description available"}
            </span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>
                  {" "}
                  {product?.categories?.data?.[0]?.attributes?.title ||
                    "Unknown"}
                </span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product?.categories?.data?.[0]?.id || ""}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
