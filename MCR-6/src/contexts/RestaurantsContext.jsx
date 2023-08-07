import { createContext, useReducer } from "react";
import {
  initialState,
  restaurantsReducer,
} from "../reducers/restaurantsReducer";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantsReducer, initialState);
  return (
    <RestaurantsContext.Provider value={{ state, dispatch }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
