import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";

const SinglePostPage = () => {
  const { id } = useParams();
  const forumData = useSelector((state) => state.forumData);

  const post = forumData.forumData.posts.find(
    (post) => String(post?.postId) === String(id)
  );

  return (
    <div className="pb-4 border-x px-6 mx-5">
      <SinglePost post={post} showComments />
    </div>
  );
};

export default SinglePostPage;
