import React from "react";

const RestaurantReviews = ({ reviews }) => {
  return (
    <div className="flex flex-col mt-5 gap-5">
      <p className="text-2xl font-bold">Reviews</p>
      {reviews.map((review) => {
        return (
          <div key={review?.id} className="flex flex-col border-b pb-1">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src={review?.pp}
                  className="bg-black w-10 p-[2px] rounded-full"
                  alt={review?.revName}
                />
                <p>{review?.revName}</p>
              </div>
              <span>{review?.rating}⭐</span>
            </div>
            <p>{review?.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantReviews;
