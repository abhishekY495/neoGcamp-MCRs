export const initialState = {
  booksData: [],
  loading: false,
  error: null,
  readingStatus: [],
};

export const booksDataReducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "ERROR": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case "GET_BOOKS_DATA": {
      return {
        ...state,
        booksData: action.payload,
        loading: false,
      };
    }
    case "GET_READING_STATUS": {
      const readingStatus = state.booksData?.reduce((acc, { status }) => {
        return acc.includes(status) ? acc : [...acc, status];
      }, []);
      return {
        ...state,
        readingStatus,
      };
    }
    case "CHANGE_STATUS": {
      const { status, id } = action.payload;
      const newBooksData = state.booksData.map((book) => {
        return book.id === id && book.status !== status
          ? { ...book, status }
          : book;
      });
      return {
        ...state,
        booksData: newBooksData,
      };
    }
    default: {
      return state;
    }
  }
};
