import React from "react";
import SingleHabit from "./SingleHabit";

const HabitsListing = ({ habits, archive }) => {
  return (
    <>
      {habits?.length === 0 ? (
        <p className="text-center text-3xl font-bold mt-10">
          No Habits found...
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-3 gap-y-4 mb-14 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1">
          {habits?.map((habit) => {
            return (
              <SingleHabit key={habit?.id} habit={habit} archive={archive} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default HabitsListing;
