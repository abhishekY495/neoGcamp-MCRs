import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";

import editIcon from "../../assets/recipeControls/edit.svg";
import deleteIcon from "../../assets/recipeControls/delete.svg";
import { RecipeDataContext } from "../../contexts/RecipeDataContext";
import EditRecipeModal from "../Modals/EditRecipeModal";

const RecipeControls = ({ recipe }) => {
  const { dispatch } = useContext(RecipeDataContext);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  const deleteHandler = () => {
    dispatch({ type: "DELETE_RECIPE", payload: recipe?.id });
    toast.success("Recipe deleted");
  };

  const editBtnHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <EditRecipeModal
        openModal={openModal}
        closeModal={closeModal}
        recipe={recipe}
      />
      <div className="flex bg-white justify-end gap-2 absolute right-0 mr-3 pb-2 px-2 rounded-bl z-10">
        <img
          src={editIcon}
          onClick={editBtnHandler}
          className="w-5 hover:cursor-pointer hover:scale-[1.08] transition-all"
          alt="edit"
        />
        <img
          src={deleteIcon}
          onClick={deleteHandler}
          className="w-5 hover:cursor-pointer hover:scale-[1.08] transition-all"
          alt="delete"
        />
      </div>
    </>
  );
};

export default RecipeControls;
