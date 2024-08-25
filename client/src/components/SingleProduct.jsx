import { useContext, useState } from "react";
import { Context } from "../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "./RelatedProducts";
import Spline from '@splinetool/react-spline';

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
    <div className="text-white">
      <div className=" w-full xl:pl-40 xl:pr-40 lg:pr-5 lg:pl-5 pb-20 pt-20 flex flex-col gap-20 md:pr-5 md:pl-5 pr-5 pl-5 sm:pr-5 sm:pl-5">
        <div className="flex flex-col gap-0 lg:flex-row md:flex-col md:gap-0 sm:gap-0 lg:gap-10  sm:flex-col">
          <div className="w-full md:w-full h-[600px] sm:w-full lg:w-1/2  flex self-center">
            {/* <img
              src={product?.img?.data?.[0]?.attributes?.url || ""}
              alt={product?.title || "Product Image"}
              className="w-full h-full block"
            /> */}
            <Spline scene="https://prod.spline.design/CmghI2bgxfgkVpu6/scene.splinecode" className=" cursor-grabbing md:self-center flex " />
          </div>
          <div className="flex flex-col gap-5 lg:w-1/2">
            <span className="text-[20px] capitalize leading-[28px] md:text-[24px] md:leading-[32px]">
              {product?.title || "Product Title"}
            </span>
            <span className="text-[24px] leading-[32px] text-[#ffff00]">
              &#8377;{product?.price ?? "Price not available"}
            </span>
            <span className="text-[14px] leading-[20px] text-[#bebebe] md:text-[16px] md:leading-[24px]">
              {product?.desc || "No description available"}
            </span>

            <div className="flex pt-5 md:mt-0 flex-row gap-7 w-full">
              <div className="flex border-2 border-white h-[50px] rounded-md  lg:w-72 md:w-52 sm:w-44 w-full">
                <span
                  onClick={decrement}
                  className="flex justify-center items-center cursor-pointer border-r-2 border-white text-[18px] w-full"
                >
                  -
                </span>
                <span className="flex justify-center items-center w-full text-[18px]">
                  {quantity}
                </span>
                <span
                  onClick={increment}
                  className="flex justify-center items-center w-full cursor-pointer border-l-2 border-white text-[18px]"
                >
                  +
                </span>
              </div>
              <button
                className="h-[50px] p-2 lg:w-72 md:w-52 sm:w-44 flex items-center justify-center bg-[#ffff00] text-black text-[16px]  hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] rounded-md transition-all duration-300  border-2 border-black w-full"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                }}
                aria-label="Add To Cart"
              >
                ADD TO CART
              </button>
            </div>

            <div className="pt-3">
              <span className="text-[18px] font-normal flex flex-row w-fit text-lexend">
                Category:
                <span className="text-[16px] font-normal font-lexend cursor-pointer" >
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
