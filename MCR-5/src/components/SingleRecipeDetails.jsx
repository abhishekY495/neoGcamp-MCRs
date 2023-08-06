import React from "react";

const SingleRecipeDetails = ({ recipe }) => {
  return (
    <div className="flex flex-col w-[900px] max-[900px]:w-full gap-5 px-10 mt-5 m-auto">
      <h2 className="text-5xl font-bold">
        {recipe?.title}{" "}
        <span className="text-2xl font-thin">{recipe?.cuisine}</span>
      </h2>
      <div className="flex flex-col border border-b-0">
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="h-80 object-cover"
        />
        <div className="flex flex-col gap-3 p-5">
          <div className="text-lg font-bold leading-3">
            Ingredients:{" "}
            {recipe?.ingredients.split(",").map((ingredient, index) => {
              return (
                ingredient.length !== 0 && (
                  <span key={ingredient} className="text-base font-normal">
                    {ingredient}
                    {index === recipe.ingredients.split(",").length - 1
                      ? "."
                      : ", "}
                  </span>
                )
              );
            })}
          </div>
          <div>
            <p className="text-lg font-bold">Instructions:</p>
            {recipe?.instructions?.split(".").map((instruction) => {
              return (
                instruction.length !== 0 && (
                  <li key={instruction}>{instruction}</li>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeDetails;
