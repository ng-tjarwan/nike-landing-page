import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section className="padding" id="about-us">
      <div className="flex  justify-between items-center max-lg:flex-col w-full gap-10 max-container">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality </span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>

        <div className="flex justify-center items-center flex-1">
          <img
            src={shoe8}
            alt="product detail"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
