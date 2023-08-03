import React from "react";

const SingleHabitInfoModal = ({ isOpen, onClose, habit }) => {
  if (!isOpen) {
    return null;
  } else {
    return (
      <div
        className="fixed h-screen w-screen top-0 right-0 bg-white/50 backdrop-blur-[2px]"
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col justify-center bg-neutral-300 w-[300px] rounded m-auto mt-[100px] px-5 py-3"
        >
          <p className="text-3xl font-bold">{habit?.title}</p>
          <hr className="border border-black/10 m-1" />
          <p>
            <span className="font-bold">Repeat: </span>
            {habit?.repeat}
          </p>
          <p>
            <span className="font-bold">Goal: </span>
            {habit?.goal}
          </p>
          <p>
            <span className="font-bold">Time Of The Day: </span>
            {habit?.timeOfTheDay}
          </p>
          <p>
            <span className="font-bold">Start Date: </span>
            {habit?.startDate}
          </p>
          <button
            className="w-full bg-neutral-100 py-[2px] mt-2 rounded hover:bg-neutral-100/80"
            onClick={onClose}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default SingleHabitInfoModal;
