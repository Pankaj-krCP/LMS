import React from "react";
import { underlineBlueCSS } from "../../../_utils/constant";

const SingleCourseDescriptionTab = ({
  description,
}: {
  description: string;
}) => {
  return (
    <div>
      <div className="my-4">
        <h2 className={`${underlineBlueCSS} text-center`}>Course Details</h2>
      </div>
      <div className="p-1">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleCourseDescriptionTab;
