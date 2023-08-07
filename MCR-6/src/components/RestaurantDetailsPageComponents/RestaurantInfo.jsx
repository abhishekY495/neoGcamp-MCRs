import React, { useState } from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/back.svg";
import AddReviewModal from "../AddReviewModal";

const RestaurantInfo = ({ restaurant }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  return (
    <>
      <AddReviewModal
        openModal={openModal}
        closeModal={closeModal}
        restaurant={restaurant}
      />
      <div className="flex justify-between gap-2 items-center border-b pb-5 max-[500px]:flex-col max-[500px]:items-start">
        <div>
          <Link
            to="/"
            className="hover:cursor-pointer hover:opacity-70 transition-all"
          >
            <img
              src={backIcon}
              className="w-6 bg-neutral-200 rounded-full p-[5px] mb-1 "
              alt="go back"
            />
          </Link>
          <p className="text-4xl pb-1">{restaurant?.name}</p>
          <p className="text-neutral-500 leading-5">
            {restaurant?.description}
          </p>
          <p className="text-neutral-500 leading-5">{restaurant?.address}</p>
          <p className="text-neutral-500 leading-5">
            Average Rating: {restaurant?.averageRating?.toFixed(1)}
          </p>
        </div>
        <div>
          <button
            className="bg-rose-500 py-1 pb-[6px] px-5 text-white rounded-md hover:opacity-[0.95]"
            onClick={() => setOpenModal(true)}
          >
            Add Review
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;
