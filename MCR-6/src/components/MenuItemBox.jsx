import React from "react";
import { Link } from "react-router-dom";

const MenuItemBox = ({ item, restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant?.id}`}
      className="flex flex-col gap-1 border rounded-md pb-2 shadow hover:shadow-lg hover:scale-[1.01] hover:cursor-pointer hover:opacity-[0.95] transition-all"
    >
      <img
        src={item?.imgSrc}
        alt={item?.name}
        className="w-44 max-[450px]:w-full h-44 object-cover rounded-t-md"
      />
      <div className="px-2">
        <p className="font-bold pb-[2px] truncate" title={item?.name}>
          {item?.name}
        </p>
        <p className="text-neutral-500 font-[400] text-[14px]">
          Rs.{item?.price} for {item?.qty}
        </p>
        <p className="text-neutral-500 font-[400] text-[14px]">
          {restaurant?.name}
        </p>
      </div>
    </Link>
  );
};

export default MenuItemBox;
