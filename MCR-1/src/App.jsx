import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { BooksDataContext } from "./contexts/BooksDataContext";
import { localBooksData } from "./data/booksData";
import { fakeFetch } from "./functions/fakeFetch";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  const { dispatch } = useContext(BooksDataContext);
  const API_URL = "https://mcr-1.abhisheky495.repl.co/booksdata";

  const getBooksData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await Promise.race([fetch(API_URL), fakeFetch]);
      if (response.getLocalData) {
        dispatch({ type: "GET_BOOKS_DATA", payload: localBooksData });
        dispatch({ type: "GET_READING_STATUS" });
      } else {
        const data = await response.json();
        dispatch({ type: "GET_BOOKS_DATA", payload: data });
        dispatch({ type: "GET_READING_STATUS" });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
