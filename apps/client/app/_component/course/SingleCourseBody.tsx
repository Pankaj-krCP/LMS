import React from "react";
import SingleCourseBodyLeft from "./SingleCourseBodyLeft";
import SingleCourseBodyRight from "./SingleCourseBodyRight";

const SingleCourseBody = () => {
  return (
    <div className="800px:flex">
      <div className="p-4 text-center 800px:fixed 800px:w-[30%] 800px:bg-white 800px:dark:bg-slate-900 800px:border-r dark:border-gray-600 left-0 top-[107px] bottom-0 overflow-y-auto">
        <SingleCourseBodyLeft />
      </div>
      <div className="p-4 800px:fixed 800px:w-[70%] left-[30%] top-[107px] bottom-0 overflow-y-auto">
        <SingleCourseBodyRight />
      </div>
    </div>
  );
};

export default SingleCourseBody;
