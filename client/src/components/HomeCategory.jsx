import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="categories-container ">
      <div className="flex flex-wrap gap-2.5">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="  w-full cursor-pointer  bg-black overflow-hidden  md:w-[calc(25%-10px)] hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] transition-all duration-300 border-4 border-transparent"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={item?.attributes?.img?.data?.attributes?.url}
              alt="img"
              className="w-full block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
