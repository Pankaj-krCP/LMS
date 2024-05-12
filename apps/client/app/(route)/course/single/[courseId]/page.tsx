import React from "react";
import SingleCourseBody from "../../../../_component/course/single/SingleCourseBody";
import SingleCourseHeader from "../../../../_component/course/single/SingleCourseHeader";

const page = () => {
  return (
    <div className="-mt-2">
      <SingleCourseHeader />
      <SingleCourseBody />
    </div>
  );
};

export default page;
