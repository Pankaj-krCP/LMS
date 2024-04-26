import React from "react";
import {
  courseData,
  underlineBlueCSS,
  underlineGreenCSS,
} from "../../_utils/constant";

const SingleCourseCurriculumTab = () => {
  return (
    <div>
      <div className="my-4">
        <h2 className={`${underlineBlueCSS}`}>Curriculum</h2>
      </div>
      <div className="p-1">
        {courseData.curriculum.map((item, index) => (
          <div key={index} className="mb-4">
            <div className={`${underlineGreenCSS}`}>
              <span>{item.title}</span>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCourseCurriculumTab;
