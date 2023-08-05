import React from "react";

const PostTags = ({ post }) => {
  return (
    <div className="flex gap-2 my-1 -ml-[2px]">
      {post?.tags?.map((tag) => {
        return (
          <span
            key={tag}
            className="bg-blue-200 text-sm text-blue-600 font-bold rounded-full px-3 pb-[2px] hover:bg-blue-300 hover:text-blue-700 hover:cursor-pointer transition-all"
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default PostTags;
