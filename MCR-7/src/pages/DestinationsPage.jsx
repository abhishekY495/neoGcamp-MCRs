import React from "react";
import { useParams } from "react-router-dom";

import { data } from "../data/localData";
import LocationBox from "../components/LocationBox";

const DestinationsPage = () => {
  const { continent_name, country_name } = useParams();

  const countriesData = data.continents
    .find(
      (continent) =>
        continent.name.toLowerCase().split(" ").join("") === continent_name
    )
    .countries.find(
      (country) =>
        country.name.toLowerCase().split(" ").join("") === country_name
    );

  return (
    <div className="flex flex-col items-center gap-5 mt-5">
      <p className="text-xl font-semibold px-10">
        Top Destinations in {countriesData.name} for your next Holiday
      </p>
      <div className="flex gap-10 flex-wrap justify-center px-5">
        {countriesData.destinations.map((destination) => {
          return (
            <LocationBox
              key={destination.id}
              data={destination}
              linkTo={`${continent_name}/${country_name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DestinationsPage;
