import React, { useContext } from "react";

import { RecipeDataContext } from "../contexts/RecipeDataContext";
import { filters } from "../data/filtersData";

const SearchAndFiltersBar = () => {
  const {
    state: { filterBy },
    dispatch,
  } = useContext(RecipeDataContext);

  const searchHandler = (e) =>
    dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });

  const inputRadioHandler = (e) => {
    dispatch({ type: "SET_FILTER_BY", payload: e.target.value });
  };

  return (
    <div className="flex gap-5 items-center border w-[810px] max-[850px]:w-[90%] m-auto mt-5 rounded-lg max-[730px]:gap-1 max-[588px]:flex-col">
      <input
        type="text"
        onChange={searchHandler}
        className="border-r pl-5 pr-4 focus:outline-0 w-[30%] max-[730px]:w-full max-[588px]:border max-[588px]:py-2"
        placeholder="Search By Filters"
      />
      <div className="flex items-center gap-3 py-2 max-[730px]:px-5">
        <p className="font-bold">Filters:</p>
        {filters.map(({ name, value }) => {
          return (
            <label key={value} className="flex items-center gap-[2px]">
              <input
                type="radio"
                name="filter"
                value={value}
                checked={filterBy === value}
                onChange={inputRadioHandler}
              />
              <p className="-mt-[2px]">{name}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SearchAndFiltersBar;
