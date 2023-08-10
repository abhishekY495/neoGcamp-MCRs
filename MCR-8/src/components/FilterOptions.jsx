import React, { useContext } from "react";
import { EventDataContext } from "../contexts/EventDataContext";

export const FilterOptions = () => {
  const { dispatch } = useContext(EventDataContext);

  const optionsHandler = (e) => {
    if (e.target.value.trim().length !== 0) {
      dispatch({ type: "SET_FILTER_BY", payload: e.target.value });
    }
  };

  return (
    <select
      className="w-[40%] focus:outline-0 rounded pl-2 pb-[2px] max-[700px]:w-[50%] max-[500px]:w-[60%]"
      onChange={optionsHandler}
    >
      <option value="">Select Event Type</option>
      <option value="both">Both</option>
      <option value="online">Online</option>
      <option value="offline">Offline</option>
    </select>
  );
};
