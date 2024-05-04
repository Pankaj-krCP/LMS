import React from "react";
import { courseTopics } from "../../../_utils/constant";
import LectureSideBarTopic from "./LectureSideBarTopics";

const LectureSideBar = () => {
  return (
    <div>
      <div className="p-2">
        {courseTopics.map((topic, index) => (
          <LectureSideBarTopic key={index} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default LectureSideBar;
