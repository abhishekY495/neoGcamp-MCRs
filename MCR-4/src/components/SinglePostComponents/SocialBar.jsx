import React, { useState } from "react";
import { Link } from "react-router-dom";

import commentIcon from "../../assets/post/comment.svg";
import shareIcon from "../../assets/post/share.svg";
import bookmarkIcon from "../../assets/post/bookmark.svg";
import bookmarkFilledIcon from "../../assets/post/bookmark-filled.svg";

const SocialBar = ({ post }) => {
  const [bookmark, setBookmark] = useState(false);

  const toggleBookmark = () => setBookmark(!bookmark);

  return (
    <div className="flex justify-between px-2 mt-2">
      <Link to={`/post/${post?.postId}`}>
        <img
          src={commentIcon}
          className="w-5 hover:cursor-pointer"
          alt="comment"
        />
      </Link>
      <img src={shareIcon} className="w-5 hover:cursor-pointer" alt="share" />
      <img
        src={bookmark ? bookmarkFilledIcon : bookmarkIcon}
        onClick={toggleBookmark}
        className="w-5 hover:cursor-pointer"
        alt="bookmark"
      />
    </div>
  );
};

export default SocialBar;
