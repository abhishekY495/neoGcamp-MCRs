import React, { useContext } from "react";

import { RestaurantsContext } from "../contexts/RestaurantsContext";

const CuisineButtons = () => {
  const {
    state: { cuisineData, selectedCuisineId },
    dispatch,
  } = useContext(RestaurantsContext);

  const btnHandler = (e) => {
    dispatch({ type: "SET_SELECTED_CUISINE", payload: e.target.value });
  };

  return (
    <div className="flex gap-6 px-5 max-[520px]:grid max-[520px]:grid-cols-2">
      {cuisineData.map(({ id, name }) => {
        return (
          <button
            key={id}
            className={`bg-rose-500 py-1 pb-[6px] px-5 text-white rounded-md hover:scale-[1.02] ${
              String(id) === String(selectedCuisineId) &&
              "border-2 border-black"
            }`}
            value={id}
            onClick={btnHandler}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default CuisineButtons;
