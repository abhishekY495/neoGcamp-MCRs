import React, { useContext } from "react";
import { SnacksDataContext } from "../context/SnacksDataContext";

const SearchBar = () => {
  const { dispatch } = useContext(SnacksDataContext);

  return (
    <input
      type="text"
      placeholder="Search by Product name and Ingredients"
      className="border rounded w-full pl-2 py-1"
      onChange={(e) =>
        dispatch({ type: "SET_SEARCHTERM", payload: e.target.value })
      }
    />
  );
};

export default SearchBar;
