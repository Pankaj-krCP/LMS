"use client";

import Button from "@repo/ui/button";
import SearchBar from "@repo/ui/search-bar";
import React, { useState } from "react";
import CourseCard from "../common/CourseCard";

const ClientBody = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="pt-[70px] text-center">
        <SearchBar
          className="p-4 mt-8 w-[60%]"
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="flex gap-5 items-center justify-between py-8 px-12 800px:px-20 flex-wrap">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      <div className="text-center">
        <Button title="get started" />
      </div>
    </div>
  );
};

export default ClientBody;
