import React from "react";
import Header from "../../../_component/course/SearchLayout";
import SideLayout from "../../../_component/course/SideLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  const openSideBar = true;
  return (
    <>
      <header className="pt-[50px]">
        <Header />
      </header>
      <div className="flex pt-[50px]">
        <div className={`hidden 800px:block w-[25%] dark:border-gray-600`}>
          <div className="fixed top-[100px] bottom-0 w-[25%] overflow-y-auto ">
            <SideLayout />
            <SideLayout />
            <SideLayout />
          </div>
        </div>
        {openSideBar && (
          <div className={`800px:hidden dark:border-gray-600`}>
            <div className="fixed w-[75%] 400px:w-[60%] top-[100px] bottom-0 overflow-y-auto bg-white dark:bg-gray-900">
              <SideLayout />
              <SideLayout />
            </div>
          </div>
        )}
        <div className="800px:w-[75%] p-8">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default layout;
