"use client";

import React, { useState } from "react";
import SearchBar from "@repo/ui/search-bar";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Filter from "./Filter";
import { customShadow } from "../../_utils/constant";
import LinkButton from "@repo/ui/linkButton";

const SearchLayout = () => {
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="fixed w-full py-[6px] flex gap-2 items-center justify-around bg-white dark:bg-slate-900 border-b dark:border-gray-600 z-[50]">
      <div className="relative w-[25%] 1100px:w-[20%]">
        <div
          className="flex justify-center items-center gap-1 cursor-pointer"
          onClick={() => {
            setOpenFilter(!openFilter);
          }}
        >
          <div className="font-bold">
            <span>Specialization</span>
          </div>
          <div className="text-sm mt-1">
            {openFilter ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
        {openFilter && (
          <div
            className={`absolute w-full p-4 top-[45px] rounded-lg border dark:border-gray-600 bg-white dark:bg-slate-900 shadow-lg ${customShadow}`}
          >
            <Filter />
          </div>
        )}
      </div>

      <div className="w-[75%] flex gap-5 justify-start">
        <div className="w-[60%]">
          <SearchBar
            className="p-2 w-full"
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="hidden 400px:block text-center">
          <LinkButton
            label="Search"
            url={`/course/search/${search.split(" ").join("-")}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;
