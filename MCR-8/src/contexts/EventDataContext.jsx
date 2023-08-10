import { createContext, useReducer } from "react";
import { initialState, eventDataReducer } from "../reducers/eventDataReducer";

export const EventDataContext = createContext();
export const EventDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventDataReducer, initialState);

  return (
    <EventDataContext.Provider value={{ state, dispatch }}>
      {children}
    </EventDataContext.Provider>
  );
};
