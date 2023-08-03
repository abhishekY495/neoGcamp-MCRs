import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { HabitsDataContext } from "../contexts/HabitsDataContext";

const NavBar = () => {
  const {
    state: { archivedHabitsData },
  } = useContext(HabitsDataContext);

  const activeNavLinkStyle = ({ isActive }) => (isActive ? "underline" : "");

  return (
    <nav className="flex gap-16 font-bold justify-center bg-neutral-800 text-white text-2xl py-3">
      <NavLink className={activeNavLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink className={activeNavLinkStyle} to="/archive">
        Archive <sup className="text-red-500">{archivedHabitsData?.length}</sup>
      </NavLink>
    </nav>
  );
};

export default NavBar;
