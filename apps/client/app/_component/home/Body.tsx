import Button from "@repo/ui/button";
import React from "react";
import CourseCard from "../common/CourseCard";
import { FaArrowUp } from "react-icons/fa";

const ClientBody = () => {
  return (
    <div className="pt-[80px]">
      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Features Courses
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 bg-blue-500 dark:bg-blue-700 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-between py-8 px-12 800px:px-20 flex-wrap">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button
          title={`All Courses`}
          className="py-3 px-4 border dark:border-gray-600"
        />
        <div className="rotate-90 cursor-pointer">
          <FaArrowUp size={20} className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default ClientBody;
