import { getData } from "@/services";
import { ProductType } from "@/types";
import ProductCard from "./ProductCard";
import Search from "./Search";

const ProductsSection = async ({ search }: { search: string }) => {
  const products: ProductType[] = await getData({ query: search });

  return (
    <section
      id="product__section"
      className="h-screen pt-10 text-gray-600 body-font"
    >
      <h3 className="text-center underline sm:text-4xl text-3xl mb-12 font-medium text-gray-900">
        Products
      </h3>
      <Search search={search} />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
