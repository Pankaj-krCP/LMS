import React from "react";
import { courses } from "../../../_utils/constant";
import LectureSideBarModule from "./LectureSideBarModule";

const LectureSideBar = () => {
  return (
    <div>
      <div className="p-2">
        {courses[0]?.modules?.map((module, index) => (
          <LectureSideBarModule key={index} module={module} />
        ))}
      </div>
    </div>
  );
};

export default LectureSideBar;
