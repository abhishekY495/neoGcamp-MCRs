import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { BooksDataContext } from "../contexts/BooksDataContext";
import SingleBook from "../components/SingleBook";
import backArrowIcon from "../assets/back-arrow.svg";

const SearchPage = () => {
  const {
    state: { booksData },
  } = useContext(BooksDataContext);
  const [searchText, setSearchText] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const searchBook = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
    if (searchTerm.length !== 0) {
      const newBooksData = booksData?.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      setSearchedBooks(newBooksData);
    } else {
      setSearchedBooks([]);
    }
  };

  return (
    <div className="flex flex-col justify-center pt-5 gap-8">
      <div className="flex items-center">
        <Link
          to="/"
          className="absolute left-8 max-[900px]:relative max-[900px]:left-2"
        >
          <img src={backArrowIcon} alt="back arrow" className="w-12" />
        </Link>
        <input
          type="text"
          className="text-black w-[60%] max-[900px]:w-full max-[900px]:mx-5 text-center text-2xl m-auto py-2 max-[700px]:py-1 rounded-lg"
          placeholder="Search books"
          onInput={searchBook}
          autoFocus
        />
      </div>
      {searchText && searchedBooks?.length === 0 && (
        <p className="text-center pt-10">No books found...</p>
      )}
      <div className="grid grid-cols-3 w-[800px] max-[800px]:w-full max-[800px]:px-5 max-[800px]:flex max-[800px]:flex-wrap max-[800px]:justify-center max-[800px]:gap-8 m-auto gap-y-10 mb-20 justify-items-center">
        {searchedBooks?.map((book) => {
          return <SingleBook key={book?.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
