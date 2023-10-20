import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  Subscribe,
  Footer,
  CustomerReviews,
  SpecialOffer,
} from "./sections";
import { Nav } from "./components";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
