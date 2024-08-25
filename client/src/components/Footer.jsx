import React from "react";
import { useNavigate } from "react-router-dom";
import { RiTwitterXLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
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
  return (
    <>
      <footer className="p-16 lg:px-5 font-lexend md:p-5 sm:p-5">
        <div className=" w-full">
          <div className="flex flex-col min-[830px]:flex-row items-center justify-between gap-6 pb-10 border-b-2 border-gray-500 ">
            <div
              onClick={handleClick}
              className=" cursor-pointer font-lexend text-white text-3xl hover:text-customYellow"
            >
              Cartopia.
            </div>
            <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
              <li>
                <div
                  onClick={handleClick}
                  className=" cursor-pointer text-lg font-normal text-gray-300 transition-all duration-300  focus-within:outline-0 hover:text-customYellow"
                >
                  Home
                </div>
              </li>
              <li>
                <div
                  onClick={scrollToCategories}
                  scrollToCategories
                  className=" cursor-pointer text-lg font-normal text-gray-300 transition-all duration-300  focus-within:outline-0 hover:text-customYellow"
                >
                  Categories
                </div>
              </li>
              <li>
                <div
                  onClick={scrollToProducts}
                  className="cursor-pointer text-lg font-normal text-gray-300 transition-all duration-300  focus-within:outline-0 hover:text-customYellow"
                >
                  Products
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-7 flex flex-col min-[520px]:flex-row items-center justify-between gap-6">
            <span className="text-sm font-normal text-gray-300">
              Made with ❤️ by{" "}
              <a
                href="https://github.com/Panth1823"
                target="blank"
                className=" text-customYellow"
              >
                Panth Shah
              </a>
            </span>
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-3 gap-5">
                <button className="border-black border-2 rounded-md bg-customYellow hover:bg-white  w-8 h-8 hover:shadow-[2px_2px_0px_rgba(255,255,0,1)]" name="Github">
                  <a href="https://github.com/Panth1823" target="blank">
                    <RiGithubLine className=" w-full h-5" />
                  </a>
                </button>
                <button className="border-black border-2 rounded-md bg-customYellow hover:bg-white  w-8 h-8 hover:shadow-[2px_2px_0px_rgba(255,255,0,1)]" name="Linkedin">
                  <a href="https://www.linkedin.com/in/panth1823/" target="blank">
                    <RiLinkedinLine className=" w-full h-5" />
                  </a>
                </button>
                <button className="border-black border-2 rounded-md bg-customYellow hover:bg-white  w-8 h-8 hover:shadow-[2px_2px_0px_rgba(255,255,0,1)]" name="Twitter">
                  <a href="https://x.com/panth1823" target="blank">
                    <RiTwitterXLine className=" w-full h-5" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
