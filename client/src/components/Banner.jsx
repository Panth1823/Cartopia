const Banner = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector(".products-container");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 ">
      <div className="text-center flex flex-col items-center w-full max-w-6xl gap-10">
        <div className="flex flex-col justify-center gap-10  w-fit">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight text-customYellow w-fit self-center">
            Cartopia
          </h1>
          <p className=" w-full md:max-w-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-snug sm:leading-relaxed md:leading-loose text-gray-100 self-center">
            Where awesome tech and amazing deals come together, Shop with a smile
          </p>
        </div>
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          <button
            className="h-12 px-4 py-2 border border-black bg-customYellow hover:bg-gray-200 hover:shadow-md active:bg-gray-300 rounded-md transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            onClick={scrollToProducts}
            aria-label="Shop Now"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
