import { cuisineData, restaurantsData } from "../data/localData";

export const initialState = {
  cuisineData,
  restaurantsData,
  selectedCuisineId: "",
};

export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_CUISINE": {
      const id = action.payload;
      return {
        ...state,
        selectedCuisineId: id,
      };
    }
    case "ADD_REVIEW": {
      const { review, restaurant } = action.payload;
      const newRestaurantData = state.restaurantsData.map((rest) =>
        rest.id === restaurant.id
          ? {
              ...rest,
              ratings: [review, ...rest.ratings],
              averageRating:
                rest.ratings.reduce(
                  (acc, curr) => curr.rating + acc,
                  review.rating
                ) /
                (rest.ratings.length + 1),
            }
          : rest
      );
      return {
        ...state,
        restaurantsData: newRestaurantData,
      };
    }
    default: {
      return state;
    }
  }
};
