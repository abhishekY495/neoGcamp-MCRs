import { createContext, useReducer } from "react";
import { initialState, recipeDataReducer } from "../reducers/recipeDataReducer";

export const RecipeDataContext = createContext();
export const RecipeDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeDataReducer, initialState);

  return (
    <RecipeDataContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeDataContext.Provider>
  );
};
