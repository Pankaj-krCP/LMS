import React from "react";
import SingleCourseLayout from "../../../../_component/course/SingleCourseLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="pt-[60px]">
        <SingleCourseLayout />
      </header>
      <div className="">{children}</div>
    </>
  );
};

export default layout;
