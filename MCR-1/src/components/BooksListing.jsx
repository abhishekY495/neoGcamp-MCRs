import React, { useContext } from "react";

import { BooksDataContext } from "../contexts/BooksDataContext";
import SingleBook from "./SingleBook";

const BooksListing = () => {
  const {
    state: { loading, error, booksData, readingStatus },
  } = useContext(BooksDataContext);

  return (
    <>
      {loading && <p className="text-2xl text-center pt-10">Loading</p>}
      {error && (
        <p className="text-2xl text-center pt-10">Something went wrong.</p>
      )}
      {/*  */}
      {readingStatus?.map((status) => {
        const booksByStatus = booksData?.filter(
          (book) => book.status === status
        );
        return (
          <div key={status} className="py-8">
            <p className="text-3xl font-bold">
              {status}{" "}
              <span className=" font-thin text-[18px]">
                ({booksByStatus.length})
              </span>
            </p>
            <hr className="mb-2 border border-white/30" />
            <div className="flex overflow-x-scroll h-[410px] max-[600px]:h-[310px] max-[600px]:px-2 gap-8 px-5 pb-5">
              {booksByStatus.map((book) => (
                <SingleBook key={book.id} book={book} />
              ))}
              {booksByStatus.length === 0 && (
                <p className="m-auto text-2xl">Empty 📖</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BooksListing;
