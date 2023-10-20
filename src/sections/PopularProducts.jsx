import { PopularProductCard } from "../components";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="padding" id="products">
      <div className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-montserrat font-bold">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-palanquin text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value{" "}
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 ga14">
          {products.map((product, index) => (
            <PopularProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
