import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const forumData = useSelector((state) => state.forumData);
  const userProfile = forumData.forumData;

  return (
    <div className="flex items-center gap-2 bg-neutral-100 py-3 px-2 rounded-md hover:bg-neutral-200/60 hover:cursor-pointer transition-all">
      <img src={userProfile?.picUrl} className="w-12" alt={userProfile?.name} />
      <div className="flex flex-col">
        <p className="font-bold">{userProfile?.name}</p>
        <p className="-mt-1 text-sm">@{userProfile?.username}</p>
      </div>
    </div>
  );
};

export default UserProfile;
