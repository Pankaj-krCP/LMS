import React from "react";
import { underlineBlueCSS } from "../../../_utils/constant";

const courses = [
  { name: "MERN Stack Course", progress: 30, completed: false },
  { name: "React Native Course", progress: 100, completed: true },
  { name: "Node.js Course", progress: 75, completed: false },
];

const CourseProgress = () => {
  return (
    <div className="p-4">
      <h1 className={`${underlineBlueCSS} text-2xl font-bold mb-4`}>
        Course Progress
      </h1>
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg mb-4"
        >
          <h2 className={`text-lg font-semibold mb-2`}>{course.name}</h2>
          <p className="text-gray-400">
            Progress: {course.progress}% completed
          </p>
          <div className="w-full bg-gray-200 rounded-full mt-2">
            <div
              className={`${
                course.completed ? "bg-green-500" : "bg-blue-500"
              } text-xs leading-none py-1 text-center text-white rounded-full`}
              style={{ width: `${course.progress}%` }}
            >
              {course.progress}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseProgress;
