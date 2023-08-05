import React from "react";
import { useSelector } from "react-redux";

import SinglePost from "../components/SinglePost";

const HomePage = () => {
  const forumData = useSelector((state) => state.forumData);

  return (
    <main className="flex flex-col gap-5 pb-4 border-x px-6 mx-5">
      {forumData.forumData.posts.map((post) => {
        return <SinglePost key={post.postId} post={post} />;
      })}
    </main>
  );
};

export default HomePage;
