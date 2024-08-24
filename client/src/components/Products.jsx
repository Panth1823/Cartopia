import Product from "./Product";

const Products = ({ products, innerpage, headingText }) => {
  return (
    <div className="products-container w-full flex flex-col gap-10">
      {!innerpage && (
        <div className="text-[18px] font-lexend uppercase text-white md:text-[24px]">
          {headingText}
        </div>
      )}
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-10">
        {products?.data?.map((item) => (
          <Product key={item.id} id={String(item.id)} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
