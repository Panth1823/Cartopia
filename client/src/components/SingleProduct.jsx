import { useContext, useState } from "react";
import { Context } from "../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "./RelatedProducts";
import { FaCartPlus } from "react-icons/fa";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const decrement = () => {
    setQuantity((prevState) => (prevState === 1 ? 1 : prevState - 1));
  };
  const increment = () => setQuantity((prevState) => prevState + 1);

  if (!data) return null;
  const product = data?.data?.[0]?.attributes;

  return (
    <div className="text-white my-5 md:my-20">
      <div className="max-w-[calc(100%-20px)] mx-auto md:max-w-[1200px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full   flex-shrink-0 border-4 border-white md:w-[600px] h-[600px]">
            <img
              src={product?.img?.data?.[0]?.attributes?.url || ""}
              alt={product?.title || "Product Image"}
              className="w-full h-full block"
            />
          </div>
          <div className="flex flex-col gap-5 md:pl-9">
            <span className="text-[20px] capitalize leading-[28px] md:text-[24px] md:leading-[32px]">
              {product?.title || "Product Title"}
            </span>
            <span className="text-[24px] leading-[32px] text-[#ffff00]">
              &#8377;{product?.price ?? "Price not available"}
            </span>
            <span className="text-[14px] leading-[20px] text-[#bebebe] md:text-[16px] md:leading-[24px]">
              {product?.desc || "No description available"}
            </span>

            <div className="flex mt-5 md:mt-0">
              <div className="flex border-2 border-white h-[50px] mr-2">
                <span
                  onClick={decrement}
                  className="flex justify-center items-center w-[40px] cursor-pointer border-r-2 border-white text-[18px]"
                >
                  -
                </span>
                <span className="flex justify-center items-center w-[60px] text-[18px]">
                  {quantity}
                </span>
                <span
                  onClick={increment}
                  className="flex justify-center items-center w-[40px] cursor-pointer border-l-2 border-white text-[18px]"
                >
                  +
                </span>
              </div>
              <button
                className="h-[50px] w-[180px] flex items-center justify-center bg-[#ffff00] text-black text-[16px] flex-grow md:flex-grow-0 hover:shadow-[3px_3px_1px_rgba(255,255,255,1)]"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} className="mr-2 " />
                ADD TO CART
              </button>
            </div>

            <div className="mt-5">
              <span className="text-[18px] font-medium">
                Category:
                <span className="text-[16px] font-normal cursor-pointer ml-2">
                  {product?.categories?.data?.[0]?.attributes?.title ||
                    "Unknown"}
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