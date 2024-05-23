import React from "react";
import { courses } from "../../../_utils/constant";
import LectureSideBarModule from "./LectureSideBarModule";

const LectureSideBar = () => {
  return (
    <div className="p-2">
      {courses[0]?.modules?.map((module, index) => (
        <LectureSideBarModule key={index} module={module} />
      ))}
      <div className="cursor-pointer hover:text-red-600">
        <p className="p-2 mb-1 font-bold">Discussion</p>
      </div>
      <div className="cursor-pointer hover:text-red-600">
        <p className="p-2 font-bold">Review</p>
      </div>
    </div>
  );
};

export default LectureSideBar;
