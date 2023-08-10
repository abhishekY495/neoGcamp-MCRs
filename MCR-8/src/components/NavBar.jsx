import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import appLogo from "../assets/app-logo.png";
import { EventDataContext } from "../contexts/EventDataContext";

export const NavBar = () => {
  const { dispatch } = useContext(EventDataContext);
  const navigate = useNavigate();

  const searchHandler = (e) => {
    navigate("/");
    dispatch({ type: "SET_SEARCH_BY", payload: e.target.value });
    dispatch({ type: "FILTER_BY_SEARCH" });
  };

  return (
    <nav className="flex gap-3 justify-center items-center px-5 py-5 max-[600px]:py-2 border-b-2 border-neutral-300">
      <Link to="/">
        <img
          src={appLogo}
          alt="meetup"
          className="w-8 mr-2 opacity-90 hover:opacity-100 hover:scale-[1.1] hover:cursor-pointer transition-all"
        />
      </Link>
      <input
        type="text"
        onChange={searchHandler}
        placeholder="Search by Title and Tags"
        className="border rounded-full px-5 py-1 w-[700px] max-[700px]:w-full focus:outline-neutral-300"
      />
    </nav>
  );
};
