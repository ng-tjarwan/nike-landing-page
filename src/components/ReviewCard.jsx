import { star } from "../assets/icons";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img
        src={review.imgURL}
        alt={review.customerName}
        width={120}
        height={120}
        className="rounded-full object-contain"
      />
      <p className="mt-6 max-w-sm info-text">{review.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-xl text-slate-gray">
          ({review.rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">
        {review.customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
