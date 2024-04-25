"use client";

import React, { useState } from "react";
import SearchBar from "@repo/ui/search-bar";
import Button from "@repo/ui/button";
import Link from "next/link";
import { IoFilter } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SearchLayout = () => {
  const [search, setSearch] = useState("");
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className="fixed w-full py-[6px] flex gap-2 items-center justify-around bg-white dark:bg-gray-900 border-b dark:border-gray-600 z-[50]">
      <div className="w-[25%] flex justify-center items-center gap-2">
        <div className="font-bold">
          <span>Filter</span>
        </div>
        <div className="hidden 800px:block">
          <IoFilter />
        </div>
        <div className="800px:hidden cursor-pointer">
          {openSideBar ? <FaChevronDown /> : <FaChevronUp />}
        </div>
      </div>

      <div className="w-[45%]">
        <SearchBar
          className="p-2 w-full"
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="hidden 400px:block w-[30%] text-center">
        <Link href={"my-learning"}>
          <Button
            title="My Learning"
            className="dark:text-gray-400 hover:dark:text-white bg-gray-50 dark:bg-gray-900 border dark:border-gray-600 p-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default SearchLayout;
