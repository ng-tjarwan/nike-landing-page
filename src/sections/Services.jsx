import { ServiceCard } from "../components";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="padding-x py-10">
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
