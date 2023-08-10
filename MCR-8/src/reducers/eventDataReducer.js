import { data } from "../data/localData";

export const initialState = {
  data,
  filteredEvents: data.events,
  filterBy: "both",
  searchBy: "",
};

export const eventDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_BY": {
      return {
        ...state,
        filterBy: action.payload.toLowerCase(),
      };
    }
    case "SET_SEARCH_BY": {
      return {
        ...state,
        searchBy: action.payload.toLowerCase(),
      };
    }
    case "FILTER_BY_SEARCH": {
      return {
        ...state,
        filteredEvents: state.data.events.filter(
          (event) =>
            event.title.toLowerCase().includes(state.searchBy) ||
            event.eventTags.some((tag) =>
              tag.toLowerCase().includes(state.searchBy)
            )
        ),
      };
    }
    default: {
      return state;
    }
  }
};
