import React from "react";
import { Link, useParams } from "react-router-dom";

import { data } from "../data/localData";

const DestinationDetailsPage = () => {
  const { continent_name, country_name, destination_name } = useParams();

  const destination = data.continents
    .find(
      (continent) =>
        continent.name.toLowerCase().split(" ").join("") === continent_name
    )
    .countries.find(
      (country) =>
        country.name.toLowerCase().split(" ").join("") === country_name
    )
    .destinations.find(
      (destination) =>
        destination.name.toLowerCase().split(" ").join("") === destination_name
    );

  return (
    <>
      <p className="text-4xl font-semibold text-center py-4 max-[700px]:text-5xl px-5">
        {destination.name}
      </p>
      <div className="w-[700px] grid grid-cols-2 gap-5 m-auto max-[700px]:grid-cols-1 max-[700px]:w-full px-5">
        <img
          src={destination.image}
          className="w- h-full object-cover"
          alt={destination.name}
        />
        <div className="flex flex-col gap-3">
          <p className="text-blue-500">
            Description:{" "}
            <span className="text-white font-thin">
              {destination.description}
            </span>
          </p>
          <p className="text-blue-500">
            Rating:{" "}
            <span className="text-white font-thin">{destination.ratings}</span>
          </p>
          <p className="text-blue-500">
            Reviews:{" "}
            <span className="text-white font-thin">{destination.reviews}</span>
          </p>
          <p className="text-blue-500">
            Location:{" "}
            <span className="text-white font-thin">{destination.location}</span>
          </p>
          <p className="text-blue-500">
            Opening Hours:{" "}
            <span className="text-white font-thin">
              {destination.openingHours}
            </span>
          </p>
          <p className="text-blue-500">
            Ticket Price:{" "}
            <span className="text-white font-thin">
              {destination.ticketPrice}
            </span>
          </p>
          <Link
            to={destination.website}
            target="_blank"
            className="text-rose-400 underline underline-offset-4 hover:text-rose-500 transition-all w-fit"
          >
            Website
          </Link>
        </div>
      </div>
    </>
  );
};

export default DestinationDetailsPage;
