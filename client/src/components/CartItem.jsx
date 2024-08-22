import React, { useContext } from "react";
import { Context } from "../utils/context";
import { MdClose } from "react-icons/md";

const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  return (
    <div className="flex flex-col flex-grow scroll">
      {cartItems?.map((item) => (
        <div key={item.id} className="p-5 flex gap-3 align-middle">
          <div className="w-16 h-16 flex-shrink-0">
            <img
              src={item.attributes?.img?.data[0].attributes.url}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 relative text-white w-fit overflow-hidden">
            <span className="block text-lg font-semibold capitalize truncate pr-8 w-fit">
              {item.attributes.title}
            </span>
            <MdClose
              className="absolute top-0 right-0 text-white cursor-pointer"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="flex items-center gap-2 text-sm font-semibold border-white border-2 w-fit">
              <span
                className="px-2 border-r border-white text-xl cursor-pointer"
                onClick={() => handleCartProductQuantity("dec", item)}
              >
                -
              </span>
              <span className="w-10 text-center">
                {item.attributes.quantity}
              </span>
              <span
                className="px-2 border-l border-white text-xl cursor-pointer"
                onClick={() => handleCartProductQuantity("inc", item)}
              >
                +
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold w-fit">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="text-customYellow">
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
