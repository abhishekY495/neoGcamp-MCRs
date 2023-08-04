import { snacksData } from "../data/snacksData";
import { snacksDataColumnNames } from "../data/snacksDataColumnNames";

export const initialState = {
  snacksData,
  snacksDataColumnNames,
  sortedSnacksData: snacksData,
  searchTerm: "",
};

export const SnacksDataReducer = (state, action) => {
  switch (action.type) {
    case "SORT": {
      const { name, sortBy, sortOrder } = action.payload;
      const newSnacksDataColumnNames = state.snacksDataColumnNames.map(
        (column) => {
          return column.name === name
            ? {
                ...column,
                sortOrder: column.sortOrder === "ASC" ? "DESC" : "ASC",
              }
            : column;
        }
      );
      const newSortedSnacksData = state.snacksData.sort((a, b) => {
        if (sortOrder === "ASC") {
          if (sortBy === "product_weight") {
            return Number(a[sortBy].split("g")[0]) >
              Number(b[sortBy].split("g")[0])
              ? 1
              : -1;
          } else {
            return a[sortBy] > b[sortBy] ? 1 : -1;
          }
        } else if (sortOrder === "DESC") {
          if (sortBy === "product_weight") {
            return Number(b[sortBy].split("g")[0]) >
              Number(a[sortBy].split("g")[0])
              ? 1
              : -1;
          } else {
            return b[sortBy] > a[sortBy] ? 1 : -1;
          }
        }
      });
      return {
        ...state,
        sortedSnacksData: newSortedSnacksData,
        snacksDataColumnNames: newSnacksDataColumnNames,
      };
    }
    case "SET_SEARCHTERM": {
      return {
        ...state,
        searchTerm: action.payload.toLowerCase(),
      };
    }
    case "TOGGLE_SORT_ORDER": {
      return {
        ...state,
        sortOrder: state.sortOrder === "ASC" ? "DESC" : "ASC",
      };
    }
    default: {
      return state;
    }
  }
};
