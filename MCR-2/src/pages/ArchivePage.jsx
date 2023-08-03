import React, { useContext } from "react";

import HabitsListing from "../components/HabitsListing";
import { HabitsDataContext } from "../contexts/HabitsDataContext";

const ArchivePage = () => {
  const {
    state: { archivedHabitsData },
  } = useContext(HabitsDataContext);

  return (
    <div className="w-[800px] m-auto mt-4 px-5 max-[800px]:w-full">
      <HabitsListing habits={archivedHabitsData} archive />
    </div>
  );
};

export default ArchivePage;
