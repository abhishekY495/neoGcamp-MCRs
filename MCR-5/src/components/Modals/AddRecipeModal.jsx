import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { RecipeDataContext } from "../../contexts/RecipeDataContext";

const AddRecipeModal = ({ modalOpen, closeModal }) => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeCuisine, setRecipeCuisine] = useState("");
  const [recipeImageLink, setRecipeImageLink] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const { dispatch } = useContext(RecipeDataContext);

  const clearInputs = () => {
    setRecipeTitle("");
    setRecipeCuisine("");
    setRecipeImageLink("");
    setRecipeIngredients("");
    setRecipeInstructions("");
  };

  const cancelBtnHandler = () => {
    clearInputs();
    closeModal();
  };

  const addBtnHandler = () => {
    if (recipeTitle.length === 0) {
      toast.error("Title cannot be empty");
    } else if (recipeCuisine.length === 0) {
      toast.error("Cuisine cannot be empty");
    } else if (recipeIngredients.length === 0) {
      toast.error("Ingredients cannot be empty");
    } else if (recipeInstructions.length === 0) {
      toast.error("Instructions cannot be empty");
    } else {
      const newRecipe = {
        id: uuidv4(),
        title: recipeTitle,
        cuisine: recipeCuisine,
        image:
          recipeImageLink.length === 0
            ? `https://source.unsplash.com/random/?${recipeTitle.toLowerCase()}`
            : recipeImageLink,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
      };
      dispatch({ type: "ADD_RECIPE", payload: newRecipe });
      toast.success("Recipe Added");
      clearInputs();
      closeModal();
    }
  };

  if (!modalOpen) {
    return null;
  } else {
    return (
      <div
        className="fixed bg-neutral-500/50 w-screen h-screen top-0 left-0 z-20 backdrop-blur-[2px]"
        onClick={closeModal}
      >
        <div
          className="bg-neutral-50 w-[300px] m-auto mt-8 p-6 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-2xl font-bold border-b">Add Recipe</p>
          <label>
            <p className=" text-lg">
              Title <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              className="border w-full pl-1 py-[2px] mb-3"
              onChange={(e) => setRecipeTitle(e.target.value)}
            />
          </label>
          <label>
            <p className=" text-lg">
              Cuisine <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              className="border w-full pl-1 py-[2px] mb-3"
              onChange={(e) => setRecipeCuisine(e.target.value)}
            />
          </label>
          <label>
            <p>Image link</p>
            <input
              type="url"
              className="border w-full pl-1 py-[2px] mb-3"
              onChange={(e) => setRecipeImageLink(e.target.value)}
              placeholder="Leave blank to auto-generate"
            />
          </label>
          <label>
            <p>
              Ingredients <sup className="text-red-500">*</sup>
            </p>
            <textarea
              className="w-full border pl-1 py-[2px] mb-3"
              placeholder="comma (,) separated"
              rows={3}
              onChange={(e) => setRecipeIngredients(e.target.value)}
            ></textarea>
          </label>
          <label>
            <p>
              Instructions <sup className="text-red-500">*</sup>
            </p>
            <textarea
              className="w-full border pl-1 py-[2px] mb-3"
              placeholder="full stop (.) separated"
              rows={3}
              onChange={(e) => setRecipeInstructions(e.target.value)}
            ></textarea>
          </label>
          <div className="flex gap-5">
            <button
              className="bg-blue-400 p-1 px-5 rounded hover:bg-blue-500/90 transition-all"
              onClick={addBtnHandler}
            >
              Add
            </button>
            <button
              className="bg-red-400 p-1 px-5 rounded hover:bg-red-500/90 transition-all"
              onClick={cancelBtnHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default AddRecipeModal;
