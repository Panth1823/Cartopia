import { useEffect, useContext } from "react";
import Banner from "./Banner";
import Category from "./HomeCategory";
import Products from "./Products";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../utils/context";
const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
    // eslint-disable-next-line
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };
  return (
    <div>
      <Banner />
      <div className=" w-full pl-40 pr-40">
        <div className=" flex flex-col gap-[75px]">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
