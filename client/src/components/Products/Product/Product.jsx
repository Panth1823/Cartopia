import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = ({
  id,
  data = { img: { data: [{ attributes: { url: "" } }] } },
}) => {
  const navigate = useNavigate();

  const imageUrl = data?.img?.data?.[0]?.attributes?.url || prod;

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={imageUrl}
          alt={data?.title ?? "Product Image"}
          onError={(e) => {
            e.target.onerror = null; // Prevent looping
            e.target.src = prod; // Fallback image
          }}
        />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title ?? "Product Title"}</span>
        <span className="price">
          &#8377;{data?.price ?? "Price not available"}
        </span>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string,
          }),
        })
      ),
    }),
  }),
};

export default Product;
