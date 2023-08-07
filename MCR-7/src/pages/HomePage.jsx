import React from "react";

import { data } from "../data/localData";
import LocationBox from "../components/LocationBox";

const HomePage = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-semibold py-5 border-b px-3">
        Welcome to Trip Advisor
      </h1>
      <div className="flex flex-col items-center gap-5 mt-5">
        <p className="text-xl font-semibold text-blue-600 px-10">
          Top Continents for your next Holiday
        </p>
        <div className="flex gap-10 flex-wrap justify-center px-5">
          {data.continents.map((continent) => {
            return <LocationBox key={continent.id} data={continent} />;
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
