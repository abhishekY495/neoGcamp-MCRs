import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SingleRecipeDetails from "../components/SingleRecipeDetails";
import { RecipeDataContext } from "../contexts/RecipeDataContext";

const SingleRecipeDetailsPage = () => {
  const {
    state: { recipeData },
  } = useContext(RecipeDataContext);
  const { id } = useParams();

  const recipe = recipeData.find((recipe) => recipe.id === id);

  return <SingleRecipeDetails recipe={recipe} />;
};

export default SingleRecipeDetailsPage;
