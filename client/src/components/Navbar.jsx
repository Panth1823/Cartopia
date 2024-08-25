import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Context } from "../utils/context";
import Cart from "./Cart";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount, showCart, setShowCart } = useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.querySelector(".products-container");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCategories = () => {
    const categoriesSection = document.querySelector(".categories-container");
    categoriesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`w-full backdrop-blur-md bg-transparent font-lexend font-semibold text-3xl text-white z-[150] transition-all duration-300 ${scrolled ? "sticky top-0 shadow-lg" : ""
          }`}
      >
        <div className="flex justify-between items-center h-12 md:h-16 w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 sm:pr-5 sm:pl-5 pl-5 pr-5">
          <ul className="hidden md:flex items-center gap-10 h-full">
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
            <div className="hidden md:flex items-center gap-6">
              <AiOutlineHeart className="text-lg cursor-pointer" />
              <div
                className="relative cursor-pointer"
                onClick={() => setShowCart(true)}
              >
                <CgShoppingCart className="text-lg" />
                {!!cartCount && (
                  <span className="absolute top-[-8px] right-[-10px] bg-customYellow text-black rounded-full w-4 h-4 text-xs font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
            <div className="md:hidden relative">
              <AiOutlineMenu
                fill="#ffff00"
                onClick={() => {
                  setIsMenuOpen(true);
                }}
                className={`text-2xl cursor-pointer transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"
                  } z-50`}
              />
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-opacity-60 flex flex-col z-50 text-white">
            <div className="flex justify-between items-center p-2.5 pl-5">
              <AiOutlineClose
                fill="#ffff00"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="text-2xl cursor-pointer"
              />
            </div>
            <ul className="flex flex-col items-center justify-center gap-3 text-center w-full z-50 bg-transparent">
              <li
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
                className="text-xl sm:text-2xl lg:text-3xl cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => {
                  scrollToCategories();
                  setIsMenuOpen(false);
                }}
                className="text-xl sm:text-2xl lg:text-3xl cursor-pointer"
              >
                Categories
              </li>
              <li
                onClick={() => {
                  scrollToProducts();
                  setIsMenuOpen(false);
                }}
                className="text-xl sm:text-2xl lg:text-3xl cursor-pointer"
              >
                Products
              </li>
              <li
                className="relative text-xl sm:text-2xl lg:text-3xl cursor-pointer"
                onClick={() => {
                  setShowCart(true);
                  setIsMenuOpen(false);
                }}
              >
                Cart
                {!!cartCount && (
                  <span className="absolute top-[-8px] right-[-10px] bg-customYellow text-black rounded-full w-4 h-4 text-xs font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </li>
            </ul>
          </div>
        )}
      </header>
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
