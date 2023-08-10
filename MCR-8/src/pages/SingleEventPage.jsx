import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { EventDataContext } from "../contexts/EventDataContext";
import { TitleAndImage } from "../components/SingleEventComponents/TitleAndImage";
import { Details } from "../components/SingleEventComponents/Details";
import { LocationTimePrice } from "../components/SingleEventComponents/LocationTimePrice";
import { SpeakersList } from "../components/SingleEventComponents/SpeakersList";

export const SingleEventPage = () => {
  const [disabled, setDisabled] = useState(false);
  const [rsvp, setRsvp] = useState(false);

  const { id } = useParams();
  const {
    state: { data },
  } = useContext(EventDataContext);

  const event = data.events.find((event) => event.id === id);

  const currentTime = new Date().getTime();
  const eventsTime = new Date(event?.eventStartTime).getTime();

  const rsvpBtnHandler = () => {
    if (disabled) {
      toast("Event is done");
    } else if (!rsvp) {
      toast.success("RSVP successful");
      setRsvp(true);
    } else {
      toast("Already RSVP'd");
    }
  };

  useEffect(() => {
    if (eventsTime - currentTime <= 0) {
      setDisabled(true);
    }
  });

  return (
    <div className="w-[1200px] m-auto mt-5 flex justify-center gap-28 px-5 max-[1218px]:gap-16 max-[1218px]:w-[100%] max-[1000px]:gap-8 max-[800px]:flex-col max-[800px]:items-center max-[800px]:w-full">
      <div className="w-[500px] max-[500px]:w-full">
        <TitleAndImage event={event} />
        <Details event={event} />
      </div>
      <div className="w-[320px] max-[320px]:w-full">
        <LocationTimePrice event={event} />
        <div className="flex flex-col">
          <SpeakersList event={event} />
          <button
            onClick={rsvpBtnHandler}
            className={`${
              disabled || rsvp ? "bg-rose-300" : "bg-rose-500"
            } w-[200px] h-[35px] m-auto mt-5 px-10 rounded shadow-md text-white pb-1 hover:cursor-pointer hover:opacity-90`}
          >
            {disabled ? "Event is Done" : "RSVP"}
          </button>
        </div>
      </div>
    </div>
  );
};
