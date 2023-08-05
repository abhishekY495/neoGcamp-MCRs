import React from "react";
import { useDispatch } from "react-redux";

import upvoteIcon from "../../assets/post/upvote.png";
import downvoteIcon from "../../assets/post/downvote.png";
import { upVotePost } from "../../features/forumDataSlice";
import { downVotePost } from "../../features/forumDataSlice";

const Voting = ({ post }) => {
  const dispatch = useDispatch();

  const upVoteBtnHandler = (id) => {
    dispatch(upVotePost(id));
  };
  const downVoteBtnHandler = (id) => {
    dispatch(downVotePost(id));
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => upVoteBtnHandler(post?.postId)}>
        <img src={upvoteIcon} className="w-8" alt="up vote" />
      </button>
      <span className="font-bold">{post?.upvotes - post?.downvotes}</span>
      <button onClick={() => downVoteBtnHandler(post?.postId)}>
        <img src={downvoteIcon} className="w-8" alt="down vote" />
      </button>
    </div>
  );
};

export default Voting;
