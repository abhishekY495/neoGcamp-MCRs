import React from "react";

import timeLogo from "../../assets/event/time.svg";
import locationLogo from "../../assets/event/location.svg";
import priceLogo from "../../assets/event/price.svg";
import { getDayDateTime } from "../../functions/getDayDateTime";

export const LocationTimePrice = ({ event }) => {
  return (
    <div className="bg-white flex flex-col gap-5 p-5 rounded-md">
      <div className="flex gap-1 items-center">
        <img src={timeLogo} alt="time" className="w-5" />
        <div className="">
          <p className="leading-5">
            {getDayDateTime(event?.eventStartTime).split("•").join(" at ")} to
          </p>
          <p className="leading-5">
            {getDayDateTime(event?.eventEndTime).split("•").join(" at ")}
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <img src={locationLogo} alt="time" className="w-5" />
          <div className="">
            <p className="leading-5">{event?.location}</p>
            <p className="leading-5">{event?.address}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <img src={priceLogo} alt="time" className="w-5" />
        <p>{event?.price}</p>
      </div>
    </div>
  );
};
