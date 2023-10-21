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
      <Footer />
    </main>
  );
};

export default App;
