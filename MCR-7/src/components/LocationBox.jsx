import React from "react";
import { Link } from "react-router-dom";

import locationIcon from "../assets/location.svg";

const LocationBox = ({ data, linkTo }) => {
  const goToLink = linkTo
    ? `/${linkTo}/${data.name.toLowerCase().split(" ").join("")}`
    : `/${data.name.toLowerCase().split(" ").join("")}`;

  return (
    <Link
      to={goToLink}
      className="w-[230px] relative rounded-lg border-b-[3px] border-r-[3px] border-neutral-800 hover:scale-[1.01]"
    >
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-[220px] object-cover rounded-lg bg-black"
      />
      <div className="flex gap-2 absolute bottom-4 left-4 right-4 z-10">
        <img src={locationIcon} className="w-5" alt="location" />
        <p className="truncate" title={data.name}>
          {data.name}
        </p>
      </div>
      <div className="shadow-[inset_0px_-60px_80px_0px_#000000] w-full h-full absolute top-0 rounded-lg"></div>
    </Link>
  );
};

export default LocationBox;
