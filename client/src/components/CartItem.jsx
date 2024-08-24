import React, { useContext } from "react";
import { Context } from "../utils/context";
import { MdClose } from "react-icons/md";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  return (
    <div className="flex flex-col flex-grow gap-2">
      {cartItems?.map((item) => (
        <div key={item.id} className="p-5 bg-white flex gap-3 align-middle transition-all duration-300 hover:shadow-[3px_3px_0px_rgba(255,255,0,1)] border-2 border-black rounded-md">
          <div className="w-16 h-16 flex-shrink-0">
            <img
              src={item.attributes?.img?.data[0].attributes.url}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 relative text-black w-fit overflow-hidden">
            <span className="block text-sm font-semibold capitalize truncate pr-8 w-fit">
              {item.attributes.title
                ? item.attributes.title.split(" ").slice(0, 3).join(" ") +
                (item.attributes.title.split(" ").length > 2 ? ".." : "")
                : "Unknown Title"}
            </span>
            <MdClose
              className="absolute top-0 right-0 text-black hover:text-red-600 cursor-pointer w-5 h-5"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="flex items-center text-sm font-semibold border-black border-2 w-fit rounded-md">
              <span
                className="px-2 border-r-2 border-black text-xl cursor-pointer"
                onClick={() => handleCartProductQuantity("dec", item)}
              >
                -
              </span>
              <span className="w-10 text-center">
                {item.attributes.quantity}
              </span>
              <span
                className="px-2 border-l-2 border-black text-xl cursor-pointer"
                onClick={() => handleCartProductQuantity("inc", item)}
              >
                +
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold w-fit">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="text-black font-bold">
                &#8377; {item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
