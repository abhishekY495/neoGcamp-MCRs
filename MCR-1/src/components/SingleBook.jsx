import React, { useContext } from "react";

import { BooksDataContext } from "../contexts/BooksDataContext";

const SingleBook = ({ book }) => {
  const {
    state: { readingStatus },
    dispatch,
  } = useContext(BooksDataContext);

  const changeStatus = (e, id) => {
    const status = e.target.value;
    if (status.length !== 0) {
      dispatch({ type: "CHANGE_STATUS", payload: { status, id } });
    }
  };

  return (
    <div className="flex flex-col w-[200px] max-[600px]:w-[150px] relative transition-all bg-neutral-100 text-black p-1 rounded hover:opacity-90 hover:cursor-pointer">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-[300px] max-[600px]:h-[200px] rounded"
      />
      <p
        className="font-bold w-[200px] max-[600px]:w-[150px] truncate px-1"
        title={book.title}
      >
        {book.title}
      </p>
      <p className="px-1 truncate leading-4 pb-1">{book.author}</p>
      <select
        className="bg-neutral-200 text-black border rounded mx-[2px] border-black/50 hover:cursor-pointer"
        onChange={(e) => changeStatus(e, book.id)}
      >
        <option value="">Move To</option>
        {readingStatus?.map((status) => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SingleBook;
