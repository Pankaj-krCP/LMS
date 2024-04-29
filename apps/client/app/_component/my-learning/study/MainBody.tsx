"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { customShadow } from "../../../_utils/constant";
// import EnrolledCourseCard from "./EnrolledCourseCard";

const courses = [
  { name: "MERN Stack Course", progress: 30, completed: false },
  { name: "React Native Course", progress: 100, completed: true },
  { name: "Node.js Course", progress: 75, completed: false },
];

const MainBody = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/my-learning/study/courseid");
  };
  return (
    <div>
      {/* <EnrolledCourseCard /> */}
      {courses.map((course, index) => (
        <div
          key={index}
          className={`cursor-pointer bg-white dark:bg-slate-800 p-4 rounded-lg mb-4 ${customShadow}`}
          onClick={onClickHandler}
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

export default MainBody;
