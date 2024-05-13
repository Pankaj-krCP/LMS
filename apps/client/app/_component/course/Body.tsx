import React from "react";
import { courses } from "../../_utils/constant";
import CourseCard from "../../_component/common/CourseCard";

const Body = () => {
  return (
    <div className="flex my-10 mx-20 gap-10 items-center justify-around flex-wrap">
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
