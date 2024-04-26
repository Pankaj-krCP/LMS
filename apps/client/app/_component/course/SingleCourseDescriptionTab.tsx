import React from "react";
import { courseData, underlineBlueCSS } from "../../_utils/constant";

const SingleCourseDescriptionTab = () => {
  return (
    <div>
      <div className="my-4">
        <h2 className={`${underlineBlueCSS}`}>Course Details</h2>
      </div>
      <div className="p-1">
        <p>{courseData.description}</p>
      </div>
    </div>
  );
};

export default SingleCourseDescriptionTab;
