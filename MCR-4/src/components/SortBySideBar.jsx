import React from "react";
import { useDispatch } from "react-redux";

import { sortBy } from "../features/forumDataSlice";

const SortBySideBar = () => {
  const dispatch = useDispatch();

  const selectOptionsHandler = (e) => {
    dispatch(sortBy(e.target.value));
  };

  return (
    <aside className="">
      <p className="text-lg font-bold">Sort By</p>
      <select
        className="bg-neutral-200 w-[180px] pb-1 pl-1"
        onChange={selectOptionsHandler}
      >
        <option value="latest">Latest</option>
        <option value="most_upvoted">Most Upvoted</option>
      </select>
    </aside>
  );
};

export default SortBySideBar;
