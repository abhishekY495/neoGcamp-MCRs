import React from "react";

export const SpeakersList = ({ event }) => {
  return (
    <>
      <h2 className="text-xl font-bold mt-5 mb-1">
        Speakers: ({event?.speakers?.length})
      </h2>
      <div className="flex justify-center gap-5">
        {event?.speakers?.map((speaker) => {
          return (
            <div
              key={speaker?.name}
              className="bg-white flex flex-col items-center justify-center p-3 shadow-lg rounded-md hover:shadow-md hover:cursor-pointer transition-all"
            >
              <img
                src={speaker?.image}
                className="w-20 h-20 rounded-full object-cover"
                alt={speaker?.name}
              />
              <p
                title={speaker?.name}
                className="text-center font-semibold truncate w-full"
              >
                {speaker?.name}
              </p>
              <p
                title={speaker?.designation}
                className="text-center text-sm text-neutral-500 w-full"
              >
                {speaker?.designation}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
