import React, { useContext, useState } from "react";

import { HabitsDataContext } from "../contexts/HabitsDataContext";
import AddHabitModal from "../components/Modals/AddHabitModal";
import HabitsListing from "../components/HabitsListing";

const HomePage = () => {
  const {
    state: { habitsData },
  } = useContext(HabitsDataContext);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(false);
  const openAddHabitModal = () => setIsOpenModal(true);

  return (
    <div className="w-[800px] m-auto px-5 max-[800px]:w-full">
      <AddHabitModal isOpen={isOpenModal} onClose={closeModal} />
      <button
        className="flex justify-center text-2xl font-bold py-1 w-full bg-slate-200 my-3 rounded border hover:bg-slate-200/80"
        onClick={openAddHabitModal}
      >
        Add Habit
      </button>
      <HabitsListing habits={habitsData} />
    </div>
  );
};

export default HomePage;
