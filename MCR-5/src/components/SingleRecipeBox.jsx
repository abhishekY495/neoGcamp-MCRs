import React from "react";

import RecipeInfo from "./SingleRecipeBoxComponents/RecipeInfo";
import RecipeImageAndTitle from "./SingleRecipeBoxComponents/RecipeImageAndTitle";
import RecipeControls from "./SingleRecipeBoxComponents/RecipeControls";

const SingleRecipeBox = ({ recipe }) => {
  return (
    <div className="w-[245px] border rounded p-3 transition-all relative">
      <RecipeControls recipe={recipe} />
      <RecipeImageAndTitle recipe={recipe} />
      <RecipeInfo recipe={recipe} />
    </div>
  );
};

export default SingleRecipeBox;
