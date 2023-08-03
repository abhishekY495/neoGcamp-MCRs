import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";

import { goal, repeat, startData, timeOfTheDay } from "../../data/miscData";
import { HabitsDataContext } from "../../contexts/HabitsDataContext";

const EditHabitModal = ({ habit, isOpen, onClose }) => {
  const { dispatch } = useContext(HabitsDataContext);
  const [habitTitle, setHabitTitle] = useState(habit?.title);
  const [habitRepeat, setHabitRepeat] = useState(habit?.repeat);
  const [habitGoal, setHabitGoal] = useState(habit?.goal);
  const [habitTimeOfTheDay, setHabitTimeOfTheDay] = useState(
    habit?.timeOfTheDay
  );
  const [habitStartDate, setHabitStartDate] = useState(habit?.startDate);

  const updateHabit = () => {
    if (habitTitle.length === 0) {
      toast.error("Title cannot be empty");
    } else if (habitRepeat.length === 0) {
      toast.error("Repeat cannot be empty");
    } else if (habitGoal.length === 0) {
      toast.error("Goal cannot be empty");
    } else if (habitTimeOfTheDay.length === 0) {
      toast.error("Time of The Day cannot be empty");
    } else if (habitStartDate.length === 0) {
      toast.error("Start Date cannot be empty");
    } else {
      const updatedHabit = {
        ...habit,
        title: habitTitle,
        repeat: habitRepeat,
        goal: habitGoal,
        timeOfTheDay: habitTimeOfTheDay,
        startDate: habitStartDate,
      };
      dispatch({ type: "EDIT_HABIT", payload: updatedHabit });
      toast.success("Habit Updated");
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  } else {
    return (
      <div
        className="fixed h-screen w-screen top-0 right-0 bg-white/50 backdrop-blur-[2px]"
        onClick={onClose}
      >
        <div
          className="flex flex-col w-[300px] m-auto mt-[100px] bg-neutral-300 p-5 rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-2xl font-bold">Edit Habit</p>
          <hr className="border border-black/10 mt-[2px] mb-[5px]" />
          {/*  */}
          <label className="pb-2">
            <span className="font-semibold">Title</span>
            <input
              type="text"
              className="pl-1 w-full"
              value={habitTitle}
              onChange={(e) => setHabitTitle(e.target.value)}
            />
          </label>
          {/*  */}
          <label className="pb-2">
            <span className="font-semibold">Repeat</span>
            <select
              className="w-full px-1"
              onChange={(e) => setHabitRepeat(e.target.value)}
              value={habitRepeat}
            >
              <option value="">Select Repeat</option>
              {repeat.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          {/*  */}
          <label className="pb-2">
            <span className="font-semibold">Goal</span>
            <select
              className="w-full px-1"
              onChange={(e) => setHabitGoal(e.target.value)}
              value={habitGoal}
            >
              <option value="">Select Goal</option>
              {goal.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          {/*  */}
          <label className="pb-2">
            <span className="font-semibold">Time of The Day</span>
            <select
              className="w-full px-1"
              onChange={(e) => setHabitTimeOfTheDay(e.target.value)}
              value={habitTimeOfTheDay}
            >
              <option value="">Select Time of The Day</option>
              {timeOfTheDay.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          {/*  */}
          <label className="pb-2">
            <span className="font-semibold">Start Date</span>
            <select
              className="w-full px-1"
              onChange={(e) => setHabitStartDate(e.target.value)}
              value={habitStartDate}
            >
              <option value="">Select Start Date</option>
              {startData.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <hr className="border border-black/10 mt-[2px] mb-2" />
          <div className="flex justify-start gap-2">
            <button
              className="bg-blue-400 p-[1px] px-5 pb-1 rounded hover:bg-blue-400/80 transition-all"
              onClick={updateHabit}
            >
              Update
            </button>
            <button
              className="bg-red-400 p-[1px] px-5 pb-1 rounded hover:bg-red-400/80 transition-all"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default EditHabitModal;
