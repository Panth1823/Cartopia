import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const scrollToProducts = () => {
    const productsSection = document.querySelector(".products-container");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 md:p-10 h-[calc(100vh-80px)] flex justify-center">
      <div className="text-center flex flex-col items-center w-fit self-center">
        <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px] 2xl:text-[180px] font-bold leading-none text-customYellow mb-3 sm:mb-5">
          Cartopia
        </h1>
        <p className="max-w-[200px] sm:max-w-[300px] md:max-w-[500px] text-[12px] sm:text-[14px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[24px] mb-3 sm:mb-5 md:mb-10 text-[#f5f5f5]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima quos qui accusantium, aut eos.
        </p>
        <div className="flex justify-center gap-3 sm:gap-5">
          <div
            className="text-[12px] sm:text-[15px] font-medium border-4 border-customYellow py-2 px-4 sm:px-5 rounded-lg cursor-pointer hover:border-[#f5f5f5] hover:shadow-[4px_6px_0px_0px_rgba(255,255,255,1)] transition-all ease-in-out text-[#f5f5f5]"
            onClick={() => navigate("/about")}
          >
            About Us
          </div>
          <div
            className="text-[12px] sm:text-[15px] font-medium bg-[#f5f5f5] text-[#1a1a1a] py-2 px-4 sm:px-5 rounded-lg cursor-pointer hover:bg-customYellow transition-all ease-in-out"
            onClick={scrollToProducts}
          >
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
