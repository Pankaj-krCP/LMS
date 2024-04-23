"use client";

import React, { useState } from "react";
import SearchBar from "@repo/ui/search-bar";
import Button from "@repo/ui/button";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="fixed w-full pb-[10px] pt-[70px] flex gap-5 items-center justify-center bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-600">
      <div className="text-end w-[60%] 800px:w-[65%]">
        <SearchBar
          className="p-2 w-[75%]"
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="w-[40%] 800px:w-[35%]">
        <Button
          title="My Learning"
          className="bg-gray-50 dark:bg-gray-900 border dark:border-gray-600 p-2"
        />
      </div>
    </div>
  );
};

export default Header;
