import React from "react";
import { Link } from "react-router-dom";

import { getDayDateTime } from "../functions/getDayDateTime";

export const EventBox = ({ event }) => {
  return (
    <div className="relative flex flex-col hover:scale-[1.01] transition-all">
      <Link to={`/event/${event?.id}`}>
        <img
          src={event?.eventThumbnail}
          alt={event?.title}
          className="w-[250px] h-[230px] object-cover rounded-lg"
        />
      </Link>
      <div className="absolute bg-white top-0 left-0 m-2 rounded-md px-2">
        {event?.eventType} Event
      </div>
      <div className="p-1">
        <Link to={`/event/${event?.id}`}>
          <p className="text-xl font-bold leading-5">{event?.title}</p>
        </Link>
        <p className="text-neutral-400 text-sm">
          {getDayDateTime(event?.eventStartTime)}
        </p>
      </div>
    </div>
  );
};
