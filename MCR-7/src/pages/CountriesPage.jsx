import React from "react";
import { useParams } from "react-router-dom";

import { data } from "../data/localData";
import LocationBox from "../components/LocationBox";

const CountriesPage = () => {
  const { continent_name } = useParams();

  const continent = data.continents.find(
    (continent) =>
      continent.name.toLowerCase().split(" ").join("") === continent_name
  );

  return (
    <div className="flex flex-col items-center gap-5 mt-5">
      <p className="text-xl font-semibold px-10">
        Top Countries in {continent.name} for your next Holiday
      </p>
      <div className="flex gap-10 flex-wrap justify-center px-5">
        {continent.countries.map((country) => {
          return (
            <LocationBox
              key={country.id}
              data={country}
              linkTo={continent_name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CountriesPage;
