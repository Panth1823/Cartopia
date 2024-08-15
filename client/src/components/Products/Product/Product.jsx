import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = ({
  id,
  data = { img: { data: [{ attributes: { url: "" } }] } },
}) => {
  const navigate = useNavigate();
  const imageUrl = data?.img?.data?.[0]?.attributes?.url || prod;

  return (
    <div
      className="flex flex-col w-[calc(25%-15px)] gap-5 cursor-pointer"
      onClick={() => navigate("/product/" + id)}
    >
      <div className="w-full h-44 md:h-[350px]  flex items-center hover:shadow-[3px_3px_0px_rgba(255,255,0,1)] transition-all duration-300 border-4 border-black">
        <img
          src={imageUrl}
          alt={data?.title ?? "Product Image"}
          className="transition-all duration-300 block w-full h-full object-contain"
          onError={(e) => {
            e.target.onerror = null; // Prevent looping
            e.target.src = prod; // Fallback image
          }}
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-[15px] md:text-[20px] text-white capitalize font-montserrat truncate">
          {data?.title ?? "Product Title"}
        </span>
        <span className="text-[20px] text-[#ffff00] font-montserrat">
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
