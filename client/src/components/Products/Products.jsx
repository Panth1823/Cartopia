import Product from "./Product/Product";

const Products = ({ products, innerpage, headingText }) => {
  return (
    <div className="products-container w-full">
      {!innerpage && (
        <div className="pb-5 text-[18px] font-medium uppercase text-white md:pb-9 md:text-[24px]">
          {headingText}
          <span className="block mt-1 w-12 h-[3px] bg-[#ffff00] md:mt-2"></span>
        </div>
      )}
      <div className="flex flex-wrap gap-2.5 md:gap-5">
        {products?.data?.map((item) => (
          <Product key={item.id} id={String(item.id)} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
