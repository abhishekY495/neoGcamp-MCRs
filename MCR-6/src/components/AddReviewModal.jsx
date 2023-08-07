import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { RestaurantsContext } from "../contexts/RestaurantsContext";

const AddReviewModal = ({ openModal, closeModal, restaurant }) => {
  const { dispatch } = useContext(RestaurantsContext);
  const [reviewRating, setReviewRating] = useState(null);
  const [reviewComment, setReviewComment] = useState("");
  const ratingValue = [1, 2, 3, 4, 5];

  const cancelBtnhandler = () => {
    setReviewComment("");
    setReviewRating(null);
    closeModal();
  };

  const onCloseModal = () => {
    setReviewComment("");
    setReviewRating(null);
    closeModal();
  };

  const submitBtnhandler = () => {
    if (reviewRating === null) {
      toast.error("Select rating");
    } else if (reviewComment.length === 0) {
      toast.error("Comment cannot be empty");
    } else {
      const review = {
        id: uuidv4(),
        revName: "Abhishek",
        pp: `https://api.dicebear.com/6.x/bottts/svg?seed=${uuidv4()}`,
        comment: reviewComment,
        rating: Number(reviewRating),
      };
      dispatch({ type: "ADD_REVIEW", payload: { review, restaurant } });
      toast.success("Review Added");
      setReviewComment("");
      setReviewRating(null);
      closeModal();
    }
  };

  if (!openModal) {
    return null;
  } else {
    return (
      <div
        className="fixed bg-neutral-500/50 w-screen h-screen top-0 left-0 z-10 backdrop-blur-[2px]"
        onClick={onCloseModal}
      >
        <div
          className="bg-neutral-50 w-[300px] m-auto mt-20 p-6 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-2xl font-bold border-b mb-2">Add Your Review</p>
          <div className="flex flex-col gap-2">
            <label className="flex gap-1">
              <p className="font-semibold">Rating:</p>
              <select
                className="w-full pl-1 border rounded"
                onChange={(e) => setReviewRating(e.target.value)}
              >
                <option value="">Select Rating</option>
                {ratingValue.map((value) => {
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              <p className="font-semibold">Comment:</p>
              <textarea
                className="w-full border pl-1 py-[2px] mb-3"
                onChange={(e) => setReviewComment(e.target.value)}
                rows={3}
              ></textarea>
            </label>
          </div>
          <div className="flex gap-5">
            <button
              className="bg-blue-400 p-1 px-5 rounded hover:bg-blue-500/90 transition-all"
              onClick={submitBtnhandler}
            >
              Submit
            </button>
            <button
              className="bg-red-400 p-1 px-5 rounded hover:bg-red-500/90 transition-all"
              onClick={cancelBtnhandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default AddReviewModal;
