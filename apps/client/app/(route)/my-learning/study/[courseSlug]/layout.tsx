import React from "react";
import LectureSideBar from "../../../../_component/my-learning/study/module/LectureSideBar";
import LectureTopBar from "../../../../_component/my-learning/study/module/LectureTopBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="inline-flex fixed left-0 top-[50px] border-b dark:border-gray-600  dark:bg-inherit w-full">
        <LectureTopBar />
      </div>
      <div className="flex">
        <div className="fixed w-[20%] top-[95px] left-0 bottom-0 overflow-y-auto">
          <LectureSideBar />
        </div>
        <div className="fixed w-[80%] top-[95px] left-[20%] bottom-0 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
