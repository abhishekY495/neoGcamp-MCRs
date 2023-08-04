import React, { useContext } from "react";

import { SnacksDataContext } from "../context/SnacksDataContext";
import TableHead from "./TableHead";

const Table = () => {
  const {
    state: { sortedSnacksData, snacksDataColumnNames, searchTerm },
  } = useContext(SnacksDataContext);

  return (
    <table className="border m-auto w-full">
      <TableHead columns={snacksDataColumnNames} />
      <tbody>
        {sortedSnacksData
          .filter((snack) => {
            return (
              snack.product_name.toLowerCase().includes(searchTerm) ||
              snack.ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(searchTerm)
              )
            );
          })
          .map((snack) => (
            <tr className="border" key={snack.id}>
              <td className="border px-2 py-1 text-center">{snack.id}</td>
              <td className="border px-2 py-1">{snack.product_name}</td>
              <td className="border px-2 py-1 text-center">
                {snack.product_weight}
              </td>
              <td className="border px-2 py-1 text-center">{snack.price}</td>
              <td className="border px-2 py-1 text-center">{snack.calories}</td>
              <td className="border px-2 py-1">
                {snack.ingredients.map((ingredient, index) => (
                  <span key={index}>
                    {index !== snack.ingredients.length - 1
                      ? ingredient + ", "
                      : ingredient}
                  </span>
                ))}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
