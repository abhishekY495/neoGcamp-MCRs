import { recipeData } from "../data/recipeData";

const localStorageRecipeData = JSON.parse(localStorage.getItem("recipeData"));

const checkDataInLocalStorage = () => {
  if (localStorageRecipeData) {
    return localStorageRecipeData;
  } else {
    localStorage.setItem("recipeData", JSON.stringify(recipeData));
  }
  return recipeData;
};

export const initialState = {
  recipeData: checkDataInLocalStorage(),
  searchTerm: "",
  filterBy: "name",
};

export const recipeDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM": {
      return {
        ...state,
        searchTerm: action.payload.toLowerCase(),
      };
    }
    case "SET_FILTER_BY": {
      return { ...state, filterBy: action.payload };
    }
    case "ADD_RECIPE": {
      const newRecipe = action.payload;
      const newRecipeData = [newRecipe, ...state.recipeData];
      localStorage.setItem("recipeData", JSON.stringify(newRecipeData));
      return { ...state, recipeData: newRecipeData };
    }
    case "UPDATE_RECIPE": {
      const newRecipe = action.payload;
      const newRecipeData = state.recipeData.map((recipe) =>
        recipe.id === newRecipe.id ? newRecipe : recipe
      );
      console.log(newRecipeData);
      localStorage.setItem("recipeData", JSON.stringify(newRecipeData));
      return { ...state, recipeData: newRecipeData };
    }
    case "DELETE_RECIPE": {
      const id = action.payload;
      const newRecipeData = state.recipeData.filter(
        (recipe) => recipe.id !== id
      );
      localStorage.setItem("recipeData", JSON.stringify(newRecipeData));
      return {
        ...state,
        recipeData: newRecipeData,
      };
    }
    default: {
      return state;
    }
  }
};
