import { useEffect, useContext } from "react";
import Banner from "./Banner";
import Category from "./HomeCategory";
import Products from "./Products";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../utils/context";
import Footer from "./Footer";
const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
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
    <div className=" flex flex-col gap-40 ">
      <Banner />
      <div className=" w-full md:pl-5 md:pr-5 pr-5 pl-5 lg:pl-40 lg:pr-40 flex flex-col">
        <div className=" flex flex-col gap-[75px]">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
