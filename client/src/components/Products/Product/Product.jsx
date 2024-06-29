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
  const imageUrl =
    data && data.img && data.img.data && data.img.data[0]
      ? process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
      : { prod }; // Default or placeholder image

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img src={imageUrl} alt="prod" />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price"> &#8377;{data.price}</span>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    img: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
  }),
};

export default Product;
