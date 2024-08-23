import React from "react";
import { useNavigate } from "react-router-dom";
import { RiTwitterXLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <footer className="p-16 lg:px-5 font-lexend">
        <div className=" w-full">
          <div className="flex flex-col min-[830px]:flex-row items-center justify-between gap-6 pb-10 border-b-2 border-gray-500">
            <a
              href="/"
              onClick={handleClick}
              className=" font-lexend text-white text-3xl hover:text-customYellow"
            >
              Cartopia
            </a>
            <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
              <li>
                <a
                  href="/"
                  onClick={handleClick}
                  className="text-lg font-normal text-gray-300 transition-all duration-300  focus-within:outline-0 hover:text-customYellow"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-300 transition-all duration-300  focus-within:outline-0 hover:text-customYellow"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-lg font-normal text-gray-300 transition-all duration-300  focus-within:outline-0 hover:text-customYellow"
                >
                  Products
                </a>
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
              <div className="grid grid-cols-3 gap-4">
                <button className="border-black border-2 rounded-md bg-customYellow hover:bg-white  w-8 h-8">
                  <a href="https://github.com/Panth1823" target="blank">
                    <RiGithubLine className=" w-full h-5" />
                  </a>
                </button>
                <button className="border-black border-2 rounded-md bg-customYellow hover:bg-white  w-8 h-8">
                  <a href="https://www.linkedin.com/in/panth1823/" target="blank">
                    <RiLinkedinLine className=" w-full h-5" />
                  </a>
                </button>
                <button className="border-black border-2 rounded-md bg-customYellow hover:bg-white  w-8 h-8">
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
