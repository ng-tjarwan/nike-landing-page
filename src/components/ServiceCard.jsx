const ServiceCard = ({ service }) => {
  return (
    <div className="flex-1 sm:w-p[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex items-center justify-center bg-coral-red rounded-full">
        <img
          src={service.imgURL}
          alt={service.label}
          width={24}
          height={24}
          className=""
        />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {service.label}
      </h3>
      <p className="mt-3 font-montserrat text-lg leading-normal text-slate-gray ">
        {service.subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
