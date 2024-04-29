import React from "react";
import MainHeading from "../../../_component/my-learning/study/MainHeading";
import MainBody from "../../../_component/my-learning/study/MainBody";
import MainNavBar from "../../../_component/my-learning/study/MainNavBar";
import SearchAndFilter from "../../../_component/my-learning/study/SearchAndFilter";

const CourseProgress = () => {
  return (
    <div className="p-4">
      <MainHeading />
      <MainNavBar />
      <SearchAndFilter />
      <MainBody />
    </div>
  );
};

export default CourseProgress;
