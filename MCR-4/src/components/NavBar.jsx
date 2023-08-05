import React from "react";
import { Link } from "react-router-dom";

import { navBarData } from "../data/navBarData";

const NavBar = () => {
  return (
    <nav className="flex flex-col gap-2">
      {navBarData.map(({ title, logo }) => {
        return (
          <Link
            key={title}
            to={`/${title.toLowerCase()}`}
            className="flex gap-2 w-[180px] p-1 pl-3 rounded-md items-center hover:bg-neutral-300/90 transition-all bg-neutral-200 opacity-75 hover:opacity-80"
          >
            <img src={logo} className="w-5" alt={title} />
            <p className="text-lg">{title}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
