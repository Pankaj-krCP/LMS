import React from "react";
import {
  courseData,
  underlineBlueCSS,
  underlineGreenCSS,
} from "../../_utils/constant";

const SingleCourseFAQTab = () => {
  return (
    <div>
      <div className="my-4">
        <h2 className={`${underlineBlueCSS}`}>FAQ</h2>
      </div>
      <div className="p-1">
        {courseData.faq.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <p className={`${underlineGreenCSS}`}>Q. {item.question}</p>
              <p>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCourseFAQTab;
