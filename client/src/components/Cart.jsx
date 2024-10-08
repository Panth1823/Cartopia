import React, { useContext } from "react";
import { BsCartX } from "react-icons/bs";
import { Context } from "../utils/context";
import CartItem from "./CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../utils/api";

const Cart = () => {
  const { cartItems, setShowCart, cartSubTotal } = useContext(Context);
  const stripePromise = loadStripe(
    import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed inset-0 z-[9999] flex justify-end">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setShowCart(false)}
      >
      </div>
      <div className="relative h-full w-full md:w-[340px] bg-[#1a1a1a] flex flex-col animate-slideCartWindow">
        <div className="flex items-center justify-end p-5 border-b border-black/10">
          <span className="flex-grow text-lg font-bold text-white uppercase">
            Cart
          </span>
        </div>
        {!cartItems.length && (
          <div className="flex flex-col items-center mt-24 gap-5 text-white">
            <BsCartX className="text-[120px] " fill="#f5f5f5" />
            <span>Cart is empty</span>
            <button
              className="bg-customYellow text-[#1a1a1a] px-4 py-2 font-medium hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] transition-all duration-300  border-2 border-black rounded-md"
              onClick={() => setShowCart(false)}
              aria-label="Return To Shop"
            >
              Return To Shop
            </button>
          </div>
        )}
        {!!cartItems.length && (
          <>
            <CartItem />
            <div className="mt-auto border-t border-white">
              <div className="flex justify-between p-5 border-t border-b border-white">
                <span className="text-lg font-bold text-white uppercase">
                  Subtotal:
                </span>
                <span className="text-lg font-bold text-white uppercase">
                  &#8377;{cartSubTotal}
                </span>
              </div>
              <div className="p-5">
                <button
                  className="w-full bg-customYellow text-[#1a1a1a] py-3 text-lg font-bold uppercase hover:shadow-[3px_3px_1px_rgba(255,255,255,1)] transition-all duration-300  border-2 rounded-md border-black"
                  onClick={handlePayment}
                  aria-label="Checkout"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
