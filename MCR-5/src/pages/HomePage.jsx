import React, { useContext } from "react";

import SingleRecipeBox from "../components/SingleRecipeBox";
import AddRecipeBox from "../components/AddRecipeBox";
import SearchAndFiltersBar from "../components/SearchAndFiltersBar";
import { RecipeDataContext } from "../contexts/RecipeDataContext";

const HomePage = () => {
  const {
    state: { recipeData, searchTerm, filterBy },
  } = useContext(RecipeDataContext);

  const filteredRecipeData = recipeData.filter((recipe) => {
    if (searchTerm.length > 0) {
      if (filterBy === "name") {
        return recipe.title.toLowerCase().includes(searchTerm);
      } else if (filterBy === "cuisine") {
        return recipe.cuisine.toLowerCase().includes(searchTerm);
      } else if (filterBy === "ingredients") {
        return recipe.ingredients.toLowerCase().includes(searchTerm);
      }
    } else {
      return recipe;
    }
  });

  const resetBtnHandler = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <>
      <SearchAndFiltersBar />
      <main className="w-[855px] max-[870px]:w-full m-auto">
        <p className="px-6 font-bold text-3xl py-4 max-[920px]:text-center">
          All Recipes
        </p>
        <div className="flex items-center m-auto flex-wrap gap-10 px-5 max-[870px]:justify-center">
          <AddRecipeBox />
          {searchTerm.length === 0 && filteredRecipeData?.length === 0 && (
            <p className="text-lg font-semibold">
              No Recipes ... <br />
              Add one <span className=" font-thin">OR</span>{" "}
              <button
                className="bg-green-300 px-5 rounded hover:bg-green-400/90 transition-all"
                onClick={resetBtnHandler}
              >
                Reset
              </button>
            </p>
          )}
          {searchTerm?.length > 0 && filteredRecipeData?.length === 0 && (
            <p className="text-lg font-bold">No such Recipe found</p>
          )}
          {filteredRecipeData?.map((recipe) => {
            return <SingleRecipeBox key={recipe?.id} recipe={recipe} />;
          })}
        </div>
      </main>
    </>
  );
};

export default HomePage;
