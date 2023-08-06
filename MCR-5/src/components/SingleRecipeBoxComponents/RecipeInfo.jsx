import React from "react";
import { Link } from "react-router-dom";

const RecipeInfo = ({ recipe }) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold">Cuisine Type:</p>
        <p>{recipe?.cuisine}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">Ingredients:</p>
        <Link
          to={`/recipe/${recipe?.id}`}
          className="text-blue-500 hover:text-blue-600 hover:font-semibold transition-all"
        >
          See Recipe
        </Link>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">Instructions:</p>
        <Link
          to={`/recipe/${recipe?.id}`}
          className="text-blue-500 hover:text-blue-600 hover:font-semibold transition-all"
        >
          See Recipe
        </Link>
      </div>
    </>
  );
};

export default RecipeInfo;
