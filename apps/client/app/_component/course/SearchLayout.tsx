"use client";

import React, { useState } from "react";
import SearchBar from "@repo/ui/search-bar";
import Button from "@repo/ui/button";
import Link from "next/link";

const SearchLayout = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="fixed w-full py-[8px] flex gap-5 items-center justify-center bg-white dark:bg-gray-900 border-b dark:border-gray-600">
      <div className="text-end w-[60%] 800px:w-[65%]">
        <SearchBar
          className="p-2 w-[75%]"
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="w-[40%] 800px:w-[35%]">
        <Link href={"my-learning"}>
          <Button
            title="My Learning"
            className="bg-gray-50 dark:bg-gray-900 border dark:border-gray-600 p-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default SearchLayout;
