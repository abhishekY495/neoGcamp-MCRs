import { createContext, useReducer } from "react";

import { initialState } from "../reducers/habitsDataReducer";
import { habitsDataReducer } from "../reducers/habitsDataReducer";

export const HabitsDataContext = createContext();

export const HabitsDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitsDataReducer, initialState);
  return (
    <HabitsDataContext.Provider value={{ state, dispatch }}>
      {children}
    </HabitsDataContext.Provider>
  );
};
