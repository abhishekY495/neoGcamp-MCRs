import { habitsData } from "../data/habitsData";
import { archivedHabitsData } from "../data/archivedHabitsData";

export const initialState = {
  habitsData,
  archivedHabitsData,
};

export const habitsDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT": {
      const newHabit = action.payload;
      return {
        ...state,
        habitsData: [...state.habitsData, newHabit],
      };
    }
    case "DELETE_HABIT": {
      const habitId = action.payload;
      return {
        ...state,
        habitsData: state.habitsData.filter((habit) => habit.id !== habitId),
        archivedHabitsData: state.archivedHabitsData.filter(
          (habit) => habit.id !== habitId
        ),
      };
    }
    case "EDIT_HABIT": {
      const updatedHabit = action.payload;
      return {
        ...state,
        habitsData: state.habitsData.map((habit) =>
          habit.id === updatedHabit.id ? updatedHabit : habit
        ),
        archivedHabitsData: state.archivedHabitsData.map((habit) =>
          habit.id === updatedHabit.id ? updatedHabit : habit
        ),
      };
    }
    case "ARCHIVE_HABIT": {
      const habit = action.payload;
      return {
        ...state,
        habitsData: state.habitsData.filter(({ id }) => id !== habit.id),
        archivedHabitsData: [...state.archivedHabitsData, habit],
      };
    }
    case "UN_ARCHIVE_HABIT": {
      const habit = action.payload;
      return {
        ...state,
        habitsData: [...state.habitsData, habit],
        archivedHabitsData: state.archivedHabitsData.filter(
          ({ id }) => id !== habit.id
        ),
      };
    }
    default: {
      return state;
    }
  }
};
