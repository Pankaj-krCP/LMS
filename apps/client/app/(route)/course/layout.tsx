import React from "react";
import SearchLayout from "../../_component/course/SearchLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={`pt-[50px]`}>
        <SearchLayout />
      </header>
      <div className="py-[57px]">
        <div>{children}</div>
      </div>
    </>
  );
};

export default layout;
