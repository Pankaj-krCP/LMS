import React from "react";
import { courses } from "../../_utils/constant";
import CourseCard from "../../_component/common/CourseCard";

const Body = () => {
  return (
    <div className="flex mt-8 gap-10 items-center justify-around flex-wrap">
      {courses.map((item, index) => {
        return (
          <div key={index}>
            <CourseCard course={item} />
          </div>
        );
      })}
      {courses.map((item, index) => {
        return (
          <div key={index}>
            <CourseCard course={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
