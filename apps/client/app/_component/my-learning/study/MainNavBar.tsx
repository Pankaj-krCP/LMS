import React from "react";

const MainNavBar = () => {
  return (
    <div className="flex gap-5 my-4 font-semibold">
      <div className="p-4 cursor-pointer border-b-2 border-gray-400 dark:border-gray-600">
        <span>All Courses</span>
      </div>
      <div className="p-4 cursor-pointer">
        <span>In Progress</span>
      </div>
      <div className="p-4 cursor-pointer">
        <span>Completed</span>
      </div>
      <div className="p-4 cursor-pointer">
        <span>New</span>
      </div>
      <div className="p-4 cursor-pointer">
        <span>Paused</span>
      </div>
    </div>
  );
};

export default MainNavBar;
