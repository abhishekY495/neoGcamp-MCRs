import { createSlice } from "@reduxjs/toolkit";

import { forumData } from "../data/forumData";

const initialState = {
  forumData: {
    ...forumData,
    posts: forumData.posts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ),
  },
};

export const forumDataSlice = createSlice({
  name: "forumData",
  initialState,
  reducers: {
    upVotePost: (state, action) => {
      const postId = action.payload;
      state.forumData.posts = state.forumData.posts.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post
      );
    },
    downVotePost: (state, action) => {
      const postId = action.payload;
      state.forumData.posts = state.forumData.posts.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes - 1 } : post
      );
    },
    sortBy: (state, action) => {
      const sortBy = action.payload;
      state.forumData.posts = state.forumData.posts.sort((a, b) => {
        if (sortBy === "latest") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortBy === "most_upvoted") {
          return b.upvotes - a.upvotes;
        }
      });
    },
  },
});

export const { upVotePost, downVotePost, sortBy } = forumDataSlice.actions;
export default forumDataSlice.reducer;
