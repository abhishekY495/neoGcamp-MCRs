import React, { useState } from "react";

import heartIcon from "../../assets/post/heart.svg";
import heartFilledIcon from "../../assets/post/heart-filled.svg";
import commentIcon from "../../assets/post/comment.svg";
import shareIcon from "../../assets/post/share.svg";

const Comments = ({ comments }) => {
  const [like, setLike] = useState(false);

  const toggleLike = () => setLike(!like);

  return (
    <div className="border-t border-black/10 mt-2">
      <h2 className="text-2xl font-bold my-2">Comments</h2>
      {comments?.length === 0 ? (
        <p className="text-center my-10 font-bold text-2xl">No Comments</p>
      ) : (
        comments.map((comment) => {
          return (
            <div key={comment?.commentId}>
              <div className="flex gap-1 items-center">
                <img
                  src={comment?.picUrl}
                  className="w-7"
                  alt={comment?.username}
                />
                <div>
                  <p className="font-bold">{comment?.name}</p>
                  <p className="-mt-[6px] font-thin text-xs">
                    @{comment?.username}
                  </p>
                </div>
              </div>
              <p>{comment?.comment}</p>
              <div className="flex justify-between border-t pt-1">
                <img
                  src={like ? heartFilledIcon : heartIcon}
                  className="w-5 hover:cursor-pointer"
                  onClick={toggleLike}
                  alt="heart"
                />
                <img
                  src={commentIcon}
                  className="w-5 hover:cursor-pointer"
                  alt="comment"
                />
                <img
                  src={shareIcon}
                  className="w-5 hover:cursor-pointer"
                  alt="share"
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Comments;
