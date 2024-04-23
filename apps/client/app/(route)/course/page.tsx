import React from "react";
import CourseCard from "../../_component/common/CourseCard";

const page = () => {
  return (
    <div>
      <div className="pt-[150px] flex gap-5 items-center justify-between py-8 px-12 800px:px-20 flex-wrap">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default page;
