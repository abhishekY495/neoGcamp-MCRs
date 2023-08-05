import React from "react";
import { Link } from "react-router-dom";

import Voting from "./SinglePostComponents/Voting";
import PostInfo from "./SinglePostComponents/PostInfo";
import PostTags from "./SinglePostComponents/PostTags";
import SocialBar from "./SinglePostComponents/SocialBar";
import Comments from "./SinglePostComponents/Comments";
import backIcon from "../assets/back.svg";

const SinglePost = ({ post, showComments }) => {
  return (
    <>
      {showComments && (
        <div className="flex gap-3 items-center bg-neutral-100 border-b px-3 py-2">
          <Link to="/">
            <img src={backIcon} className="w-4" alt="go back" />
          </Link>
          <p className="text-lg font-bold">Post</p>
        </div>
      )}
      <div className="flex gap-2 bg-neutral-100 w-[550px] p-4">
        <Voting post={post} />
        <div>
          <Link to={`/post/${post?.postId}`}>
            <PostInfo post={post} />
            <p className="text-[20px] font-bold">{post?.post}</p>
            <PostTags post={post} />
            <p className="border-b border-black/10 pb-2">
              {post?.postDescription}
            </p>
          </Link>
          <SocialBar post={post} />
          {showComments && <Comments comments={post?.comments} />}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
