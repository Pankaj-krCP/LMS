import React from "react";
import Header from "../../_component/course/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      {children}
    </>
  );
};

export default layout;
