import React from "react";

export const TitleAndImage = ({ event }) => {
  return (
    <>
      <p className="text-4xl font-bold mb-3">{event?.title}</p>
      <p className="mb-2">
        <span className="font-bold">Hosted By: </span>
        {event?.hostedBy}
      </p>
      <img
        src={event?.eventThumbnail}
        className="w-full mb-3"
        alt={event?.title}
      />
    </>
  );
};
