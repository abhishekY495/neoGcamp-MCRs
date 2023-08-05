import React from "react";

import { formatDate } from "../../utils/formatDate";

const PostInfo = ({ post }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={post?.picUrl} className="w-5" alt={post?.name} />
      <span className="text-neutral-500">Posted by</span>
      <p className="text-blue-500">@{post?.name}</p>
      <span>•</span>
      <p className="text-sm font-thin">{formatDate(post?.createdAt)}</p>
    </div>
  );
};

export default PostInfo;
