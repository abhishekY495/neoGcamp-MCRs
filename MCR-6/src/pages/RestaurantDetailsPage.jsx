import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { RestaurantsContext } from "../contexts/RestaurantsContext";
import RestaurantInfo from "../components/RestaurantDetailsPageComponents/RestaurantInfo";
import RestaurantReviews from "../components/RestaurantDetailsPageComponents/RestaurantReviews";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const {
    state: { restaurantsData },
  } = useContext(RestaurantsContext);

  const restaurant = restaurantsData.find(
    (restaurant) => String(restaurant.id) === String(id)
  );

  return (
    <div className="flex flex-col w-[900px] m-auto px-5 mt-2 max-[900px]:w-full">
      <RestaurantInfo restaurant={restaurant} />
      <RestaurantReviews reviews={restaurant?.ratings} />
    </div>
  );
};

export default RestaurantDetailsPage;
