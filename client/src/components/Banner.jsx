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
    <div className=" h-[100vh] flex justify-center">
      <div className="text-center flex flex-col items-center w-full self-center gap-10 md:pl-40 md:pr-40">
        <div className="flex flex-col justify-center gap-10 w-full sm:gap-5">

          <h1 className="text-[60px] sm:text-[90px] md:text-[80px] lg:text-[90px] xl:text-[120px] 2xl:text-[150px] font-bold leading-none text-customYellow">
            Cartopia
          </h1>
          <p className="max-w-[400px] sm:max-w-[300px] md:max-w-[500px] text-[12px] sm:text-[14px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[24px] text-[#f5f5f5] self-center">
            Where awesome tech and amazing deals come together. Shop with a smile
          </p>
        </div>
        <div className="flex justify-center gap-3 sm:gap-5">
          <div className="flex gap-6">
            <button
              className="h-12 border-black  p-2.5 bg-customYellow hover:bg-[#f5f5f5] hover:shadow-[3px_3px_0px_rgba(255,255,0,1)] active:bg-[#f5f5f5] rounded-md transition-all duration-300  border-2"
              onClick={scrollToProducts}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
