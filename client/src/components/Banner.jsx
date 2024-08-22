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
    <div className=" h-[calc(100vh-80px)] flex justify-center">
      <div className="text-center flex flex-col items-center w-fit self-center gap-10">
        <div className="flex flex-col justify-center gap-10">

        <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px] 2xl:text-[180px] font-bold leading-none text-customYellow">
          Cartopia
        </h1>
        <p className="max-w-[200px] sm:max-w-[300px] md:max-w-[500px] text-[12px] sm:text-[14px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[24px] text-[#f5f5f5] self-center">
        Where awesome tech and amazing deals come together. Shop with a smile
        </p>
        </div>
        <div className="flex justify-center gap-3 sm:gap-5">
          <div className="flex gap-6">
            <button
              className="h-12 border-black  p-2.5 bg-customYellow hover:bg-[#f5f5f5] hover:shadow-[2px_2px_0px_rgba(255,255,0,1)] active:bg-[#f5f5f5]"
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
