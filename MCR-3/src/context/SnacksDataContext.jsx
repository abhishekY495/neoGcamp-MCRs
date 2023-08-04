import { createContext, useReducer } from "react";
import { SnacksDataReducer, initialState } from "../reducers/snacksDataReducer";

export const SnacksDataContext = createContext();
export const SnacksDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SnacksDataReducer, initialState);
  return (
    <SnacksDataContext.Provider value={{ state, dispatch }}>
      {children}
    </SnacksDataContext.Provider>
  );
};
