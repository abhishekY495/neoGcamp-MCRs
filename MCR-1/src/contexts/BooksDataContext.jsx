import { createContext, useReducer } from "react";

import { booksDataReducer, initialState } from "../reducers/booksDataReducer";

export const BooksDataContext = createContext();
export const BooksDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksDataReducer, initialState);

  return (
    <BooksDataContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksDataContext.Provider>
  );
};
