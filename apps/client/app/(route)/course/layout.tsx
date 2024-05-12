"use client";

import React from "react";
import SearchLayout from "../../_component/course/SearchLayout";
import { usePathname } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const isSingleCourse = path.split("/")[2] === "single";
  return (
    <>
      {!isSingleCourse && (
        <header className={`pt-[50px]`}>
          <SearchLayout />
        </header>
      )}
      <div className="py-[57px]">
        <div>{children}</div>
      </div>
    </>
  );
};

export default layout;
