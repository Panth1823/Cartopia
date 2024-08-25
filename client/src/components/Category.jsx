import { useParams } from "react-router-dom";
import Products from "./Products";
import useFetch from "../hooks/useFetch";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <>
      <div className="flex flex-col gap-12 pt-8 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 sm:pl-5 sm:pr-5 p-5">
        <div className="">
          <div className="text-2xl text-white md:text-3xl">
            {
              data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
                ?.title
            }
          </div>
        </div>
        <Products innerpage={true} products={data} />
      </div>
    </>
  );
};

export default Category;
