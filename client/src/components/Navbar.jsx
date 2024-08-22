import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { Context } from "../utils/context";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.querySelector(".products-container");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCategories = () => {
    const CategoriesSection = document.querySelector(".categories-container");
    if (CategoriesSection) {
      CategoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { cartCount, showCart, setShowCart } = useContext(Context);

  return (
    <>
      <header
        className={`w-full backdrop-blur-md bg-transparent text-white z-[150] rounded-full transition-all duration-300 ${scrolled ? "sticky top-0 shadow-lg" : ""
          }`}
      >
        <div className="flex justify-between items-center h-12 md:h-16 max-w-6xl mx-auto ">
          <ul className="hidden md:flex items-center gap-6">
            <li
              onClick={() => navigate("/")}
              className="text-sm font-semibold uppercase cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={scrollToCategories}
              className="text-sm font-semibold uppercase cursor-pointer"
            >
              Categories
            </li>
            <li
              onClick={scrollToProducts}
              className="text-sm font-semibold uppercase cursor-pointer"
            >
              Products
            </li>
          </ul>
          <div className="flex items-center gap-6 md:gap-8">
            <AiOutlineHeart className="text-lg cursor-pointer" />
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <CgShoppingCart className="text-lg" />
              {!!cartCount && (
                <span className="absolute top-[-8px] right-[-10px] bg-customYellow text-black rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
