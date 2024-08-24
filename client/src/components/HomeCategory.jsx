import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="categories-container flex flex-col gap-10">
        <div className="text-[18px] font-lexend uppercase text-white md:text-[24px]">
          Categories
        </div>
        <div className="flex flex-row md:gap-10 sm:gap-2 justify-between sm:flex-col lg:flex-row ">
          {categories?.data?.map((item) => (
            <div
              key={item.id}
              className="w-full h-full border-black border-2 rounded-md hover:shadow-[4px_4px_0px_rgba(255,255,0,1)] bg-white cursor-pointer overflow-hidden transition-all duration-300"
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <div className="block cursor-pointer">
                <div className="px-6 py-6 text-left ">
                  <h1 className=" text-xl md:text-center ">{item?.attributes?.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
