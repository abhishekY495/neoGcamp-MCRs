import React from "react";
import { Link } from "react-router-dom";

import BooksListing from "../components/BooksListing";

const HomePage = () => {
  return (
    <div className="flex flex-col w-[800px] m-auto mt-5 max-[900px]:w-full px-4 mb-20">
      <Link
        to="/search"
        className="bg-neutral-500 w-[60%] text-center text-2xl m-auto py-2 max-[700px]:py-1 rounded-lg max-[900px]:w-full max[p00px]:mx-5"
      >
        🔍 Search
      </Link>
      <BooksListing />
    </div>
  );
};

export default HomePage;
