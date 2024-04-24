import React from "react";
import Header from "../../../_component/course/SearchLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="pt-[60px]">
        <Header />
      </header>
      <div className="pt-[40px]">{children}</div>
    </>
  );
};

export default layout;
