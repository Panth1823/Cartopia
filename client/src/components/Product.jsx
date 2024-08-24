import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import prod from "../assets/products/earbuds-prod-1.webp";

const Product = ({
  id,
  data = { img: { data: [{ attributes: { url: "" } }] } },
}) => {
  const navigate = useNavigate();
  const imageUrl = data?.img?.data?.[0]?.attributes?.url || prod;

  return (
    <div
      className="w-full h-full border-black border-2 rounded-md hover:shadow-[4px_4px_0px_rgba(255,255,0,1)] bg-white cursor-pointer"
      onClick={() => navigate("/product/" + id)}
    >
      <article className="w-full h-full">
        <figure className="w-full border-black border-b-2">
          <img
            src={imageUrl}
            alt={data?.title ?? "Product Image"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = prod;
            }}
          />
        </figure>
        <div className="px-6 py-5 text-left h-fit">
          <h1 className="text-xl mb-4 capitalize text-black">
            {data?.title
              ? data.title.split(" ").slice(0, 2).join(" ") +
              (data.title.split(" ").length > 2 ? "..." : "")
              : "Product Title"}
          </h1>
          <strong className="text-black text-sm">View More</strong>
        </div>
      </article>
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
