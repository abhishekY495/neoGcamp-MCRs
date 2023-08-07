import React from "react";

import CuisineButtons from "../components/CuisineButtons";
import RestaurantsListingWithMenu from "../components/RestaurantsListingWithMenu";

const HomePage = () => {
  return (
    <>
      <p className="text-3xl text-center font-bold bg-neutral-100 py-4 mb-5">
        Food Ordering App
      </p>
      <div className="flex flex-col gap-4 items-center w-[900px] max-[900px]:w-full px-5 m-auto">
        <p className="text-lg font-bold">Select Your Cuisine</p>
        <CuisineButtons />
        <RestaurantsListingWithMenu />
      </div>
    </>
  );
};

export default HomePage;
