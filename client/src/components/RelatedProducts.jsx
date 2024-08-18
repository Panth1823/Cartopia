import React from "react";
import useFetch from "../hooks/useFetch";
import Products from "./Products";

const RelatedProducts = ({ categoryId, productId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );

  return (
    <div className=" pt-9">
      <Products headingText="Related Products" products={data} />
    </div>
  );
};

export default RelatedProducts;