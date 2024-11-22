import React from "react";

const StarRating = ({rating,setRating}) => {

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      <select
        value={rating}
        onChange={handleChange}
        className=" w-full px-3 font-jamjure py-3.5 border-2 border-gray-200 rounded bg-gray-50 focus:border-2 focus:border-blue-500"
      >
        <option value="" disabled>
          -- Choose a rating --
        </option>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {`${star} ${star === 1 ? "Star" : "Stars"}`}
          </option>
        ))}
      </select>
      {rating && (
        <div className="mt-2 flex items-center space-x-1">
          <span className="text-gray-700 font-roboto caption">Selected Rating:</span>
          <div className="flex">
            {[...Array(parseInt(rating))].map((_, index) => (
              <span key={index} className=" text-lg">
                ⭐
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StarRating;
