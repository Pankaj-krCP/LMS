import React from "react";
import Sidebar from "../../_component/my-learning/common/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex">
        <div className="fixed w-[20%] top-[50px] left-0 bottom-0 overflow-y-auto bg-white dark:bg-slate-900 text-md font-semibold p-2 border-r dark:border-gray-600">
          <Sidebar />
        </div>
        <div className="fixed w-[80%] top-[50px] left-[20%] bottom-0 overflow-y-auto p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
