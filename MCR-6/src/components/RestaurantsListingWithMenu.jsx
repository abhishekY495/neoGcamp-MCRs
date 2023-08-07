import React, { useContext } from "react";

import { RestaurantsContext } from "../contexts/RestaurantsContext";
import MenuItemBox from "../components/MenuItemBox";

const RestaurantsListingWithMenu = () => {
  const {
    state: { restaurantsData, selectedCuisineId },
  } = useContext(RestaurantsContext);

  const restaurants = restaurantsData?.filter(
    ({ cuisine_id }) => String(cuisine_id) === String(selectedCuisineId)
  );

  return (
    selectedCuisineId && (
      <div className="flex flex-col justify-center gap-3">
        {restaurants.map((restaurant) => {
          return (
            <div
              key={restaurant?.id}
              className="flex flex-col gap-3 border-b p-5 pb-10"
            >
              <p className="text-xl font-bold">Dishes By {restaurant?.name}</p>
              <div className="flex gap-9 flex-wrap max-[920px]:grid max-[920px]:grid-cols-3 max-[630px]:grid-cols-2 max-[450px]:grid-cols-1">
                {restaurant?.menu?.map((item) => {
                  return (
                    <MenuItemBox
                      key={item?.name}
                      item={item}
                      restaurant={restaurant}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default RestaurantsListingWithMenu;
