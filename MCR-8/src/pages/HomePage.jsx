import React, { useContext } from "react";

import { EventDataContext } from "../contexts/EventDataContext";
import { EventBox } from "../components/EventBox";
import { FilterOptions } from "../components/FilterOptions";

export const HomePage = () => {
  const {
    state: { filteredEvents, filterBy },
  } = useContext(EventDataContext);

  const eventsData = filteredEvents?.filter((event) => {
    if (filterBy === "online") {
      return event?.eventType?.toLowerCase()?.includes(filterBy);
    } else if (filterBy === "offline") {
      return event?.eventType?.toLowerCase()?.includes(filterBy);
    } else if (filterBy === "both") {
      return event;
    }
  });

  return (
    <div className="w-[850px] m-auto px-5 max-[870px]:w-full">
      <div className="flex items-center justify-between max-[500px]:flex-col my-4">
        <h1 className="text-4xl font-bold mt-1 mb-3 ml-3">All Events</h1>
        <FilterOptions />
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-10 max-[870px]:flex max-[870px]:flex-wrap max-[870px]:justify-center">
        {eventsData?.length === 0 && (
          <p className="text-center text-2xl font-bold">No Events</p>
        )}
        {eventsData?.map((event) => {
          return <EventBox key={event?.id} event={event} />;
        })}
      </div>
    </div>
  );
};
