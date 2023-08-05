import { configureStore } from "@reduxjs/toolkit";

import forumDataSlice from "../features/forumDataSlice";

export const store = configureStore({
  reducer: {
    forumData: forumDataSlice,
  },
});
