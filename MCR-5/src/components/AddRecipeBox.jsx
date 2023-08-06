import React, { useState } from "react";

import plusLogo from "../assets/plus.svg";
import AddRecipeModal from "../components/Modals/AddRecipeModal";

const AddRecipeBox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <AddRecipeModal modalOpen={modalOpen} closeModal={closeModal} />
      <div
        className="flex justify-center items-center w-[245px] h-[343px] max-[586px]:h-[80px] opacity-50 hover:opacity-90 hover:bg-neutral-50 hover:cursor-pointer hover:scale-[1.02] border rounded p-3 transition-all"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <img
          src={plusLogo}
          className="w-20 max-[586px]:w-10 border-2 p-5 max-[586px]:p-1 rounded-lg transition-all"
          alt="plus"
        />
      </div>
    </>
  );
};

export default AddRecipeBox;
