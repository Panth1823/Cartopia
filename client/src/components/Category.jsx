import { useParams } from "react-router-dom";
import Products from "./Products";
import useFetch from "../hooks/useFetch";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="my-8 md:my-20">
      <div className="max-w-[calc(100%-20px)] mx-auto md:max-w-[1200px] px-5">
        <div className="text-2xl text-white md:text-4xl">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>
      </div>
      <Products innerpage={true} products={data} />
    </div>
  );
};

export default Category;
