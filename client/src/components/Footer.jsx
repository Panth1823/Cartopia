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
      <footer className="lg:px-5 font-lexend md:p-5 sm:p-5 lg:pl-40 lg:pr-40 p-5 pb-20 pt-20">
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
              <a href="https://github.com/Panth1823" target="_blank" className="text-customYellow font-lexend font-bold" aria-label="Visit Panth Shah's GitHub profile" rel="noreferrer">
                Panth Shah
              </a>
            </span>
            <div className="grid grid-cols-3 gap-5">
              <button
                className="border-black border-2 rounded-md bg-customYellow hover:bg-white w-10 h-10 hover:shadow-[2px_2px_0px_rgba(255,255,0,1)]"
                aria-label="Github"
              >
                <a href="https://github.com/Panth1823" target="_blank" rel="noreferrer" aria-label="Visit Panth's GitHub profile">
                  <RiGithubLine className="w-full h-6" />
                </a>
              </button>
              <button
                className="border-black border-2 rounded-md bg-customYellow hover:bg-white w-10 h-10 hover:shadow-[2px_2px_0px_rgba(255,255,0,1)]"
                aria-label="Linkedin"
              >
                <a href="https://www.linkedin.com/in/panth1823/" target="_blank" rel="noreferrer" aria-label="Visit Panth's LinkedIn profile">
                  <RiLinkedinLine className="w-full h-6" />
                </a>
              </button>
              <button
                className="border-black border-2 rounded-md bg-customYellow hover:bg-white w-10 h-10 hover:shadow-[2px_2px_0px_rgba(255,255,0,1)]"
                aria-label="Twitter"
              >
                <a href="https://x.com/panth1823" target="_blank" rel="noreferrer" aria-label="Visit Panth's Twitter profile">
                  <RiTwitterXLine className="w-full h-6" />
                </a>
              </button>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
