import React from "react";

const MainNavBar = () => {
  return (
    <div className="flex gap-5 my-4 font-semibold">
      <div className="p-4">
        <span>All Courses</span>
      </div>
      <div className="p-4 border-b-2 border-gray-400 dark:border-gray-600 cursor-pointer">
        <span>In Progress</span>
      </div>
      <div className="p-4">
        <span>Completed</span>
      </div>
      <div className="p-4">
        <span>New</span>
      </div>
    </div>
  );
};

export default MainNavBar;
