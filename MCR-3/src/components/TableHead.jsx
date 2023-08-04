import React, { useContext } from "react";
import { SnacksDataContext } from "../context/SnacksDataContext";

const TableHead = ({ columns }) => {
  const { dispatch } = useContext(SnacksDataContext);

  const toggleSort = (name, sortBy, sortOrder) => {
    dispatch({ type: "SORT", payload: { name, sortBy, sortOrder } });
  };

  return (
    <thead>
      <tr>
        {columns.map(({ name, value, sortOrder }) => (
          <th
            key={name}
            className="border select-none px-3 py-2 bg-neutral-100 hover:bg-neutral-200 hover:cursor-pointer transition-all"
            onClick={() => toggleSort(name, value, sortOrder)}
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
