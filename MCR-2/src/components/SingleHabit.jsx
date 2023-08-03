import React, { useContext, useState } from "react";

import SingleHabitInfoModal from "./Modals/SingleHabitInfoModal";
import EditHabitModal from "./Modals/EditHabitModal";
import { HabitsDataContext } from "../contexts/HabitsDataContext";
import { toast } from "react-hot-toast";

const SingleHabit = ({ habit, archive }) => {
  const { dispatch } = useContext(HabitsDataContext);
  const [isOpenSingleHabitInfoModal, setIsOpenSingleHabitInfoModal] =
    useState(false);
  const [isOpenEditHabitModal, setIsOpenEditHabitModal] = useState(false);

  const onCloseSingleHabitInfoModal = () =>
    setIsOpenSingleHabitInfoModal(false);
  const onCloseEditHabitModal = () => setIsOpenEditHabitModal(false);

  const showHabitInfo = () => setIsOpenSingleHabitInfoModal(true);
  const editHabit = () => setIsOpenEditHabitModal(true);

  const deleteHabitBtnHandler = (id) => {
    dispatch({ type: "DELETE_HABIT", payload: id });
    toast.success("Deleted");
  };
  const archiveHabitBtnHandler = (habit) => {
    dispatch({ type: "ARCHIVE_HABIT", payload: habit });
    toast.success("Moved to Archive");
  };
  const unArchiveHabitBtnHandler = (habit) => {
    dispatch({ type: "UN_ARCHIVE_HABIT", payload: habit });
    toast.success("UnArchived");
  };

  return (
    <>
      <SingleHabitInfoModal
        habit={habit}
        isOpen={isOpenSingleHabitInfoModal}
        onClose={onCloseSingleHabitInfoModal}
      />
      <EditHabitModal
        habit={habit}
        isOpen={isOpenEditHabitModal}
        onClose={onCloseEditHabitModal}
      />
      <div
        className="flex flex-col gap-2 bg-neutral-100 py-2 px-5 pb-5 rounded border hover:cursor-pointer hover:shadow-md transition-all"
        onClick={showHabitInfo}
      >
        <p className="font-bold text-2xl truncate">{habit?.title}</p>
        <div className="flex gap-2 w-fit" onClick={(e) => e.stopPropagation()}>
          <button
            className="bg-blue-300 rounded p-1 px-2 text-sm hover:bg-blue-300/90"
            onClick={editHabit}
          >
            Edit
          </button>
          <button
            className="bg-red-300 rounded p-1 px-2 text-sm hover:bg-red-300/90"
            onClick={() => deleteHabitBtnHandler(habit?.id)}
          >
            Delete
          </button>
          <button
            className="bg-pink-300 rounded p-1 px-2 text-sm hover:bg-pink-300/90"
            onClick={() => {
              archive
                ? unArchiveHabitBtnHandler(habit)
                : archiveHabitBtnHandler(habit);
            }}
          >
            {archive ? "UnArchive" : "Archive"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleHabit;
