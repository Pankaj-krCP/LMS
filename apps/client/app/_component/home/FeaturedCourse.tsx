import React from "react";
import CourseCard from "../common/CourseCard";

const FeaturedCourse = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Featured Courses
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-blue-500 dark:bg-blue-700 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-between py-8 px-12 800px:px-20 flex-wrap">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
};

export default FeaturedCourse;
