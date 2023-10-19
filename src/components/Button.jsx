const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border border-coral-red rounded-full font-montserrat text-white text-lg leading-none bg-coral-red">
      {label}

      <img
        src={iconUrl}
        alt="label"
        width={24}
        height={24}
        className="ml-2 rounded-full w-5 h-5 bg-white"
      />
    </button>
  );
};

export default Button;
