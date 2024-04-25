import React from "react";
import SingleCourseLayout from "../../../../_component/course/SingleCourseLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="pt-[50px]">
        <SingleCourseLayout />
      </header>
      <div className="pt-[50px]">{children}</div>
    </>
  );
};

export default layout;
