import React from "react";
import { Link } from "react-router-dom";

const RecipeImageAndTitle = ({ recipe }) => {
  return (
    <>
      <Link to={`/recipe/${recipe?.id}`}>
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full h-[200px] object-cover hover:cursor-pointer transition-all"
        />
      </Link>
      <Link to={`/recipe/${recipe?.id}`}>
        <p className="font-bold text-[20px] my-2 truncate hover:cursor-pointer">
          {recipe?.title}
        </p>
      </Link>
    </>
  );
};

export default RecipeImageAndTitle;
