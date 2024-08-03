import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
  const navigate = useNavigate();

  const imageUrl =
    process.env.REACT_APP_DEV_URL +
    data?.image?.data?.[0]?.attributes?.url || "";

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img src={imageUrl} alt={data?.title ?? "Product Image"} />
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

export default Product;
