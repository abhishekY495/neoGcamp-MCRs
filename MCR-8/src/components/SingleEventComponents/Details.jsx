import React from "react";

export const Details = ({ event }) => {
  return (
    <>
      <div className="mb-3">
        <h2 className="text-xl font-bold">Details: </h2>
        <p>{event?.eventDescription}</p>
      </div>
      {/*  */}
      <div className="mb-3">
        <h2 className="text-xl font-bold">Additional Information: </h2>
        <p className="leading-5">
          <span className="font-bold">Dress Code: </span>{" "}
          {event?.additionalInformation?.dressCode}
        </p>
        <p className="leading-5">
          <span className="font-bold">Age Restriction: </span>
          {event?.additionalInformation?.ageRestrictions}
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-1">Event Tags: </h2>
        <div className="flex gap-4">
          {event?.eventTags.map((tag) => {
            return (
              <p
                key={tag}
                className="bg-rose-500 w-fit px-3 rounded-md text-white pb-1 hover:cursor-pointer hover:opacity-90"
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};
