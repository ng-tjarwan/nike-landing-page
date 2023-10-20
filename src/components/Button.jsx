const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`
        ${backgroundColor ? backgroundColor : "bg-coral-red"} 
        ${borderColor ? borderColor : "border-coral-red"} 
        ${textColor ? textColor : "text-white"} 
        flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none
      `}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="label"
          width={24}
          height={24}
          className="ml-2 rounded-full w-5 h-5 bg-white"
        />
      )}
    </button>
  );
};

export default Button;
