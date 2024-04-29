"use client";

import SearchBar from "@repo/ui/search-bar";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const SearchAndFilter = () => {
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="my-8 flex items-center justify-between">
      <SearchBar className="p-2" search={search} setSearch={setSearch} />
      <div
        className="relative flex items-center gap-16 p-2 font-semibold cursor-pointer bg-white border rounded-lg dark:border-gray-600 dark:bg-slate-900 outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort By{" "}
        {isOpen ? <MdArrowDropUp size={20} /> : <MdArrowDropDown size={20} />}
        {isOpen && (
          <div className="absolute top-[100%] right-[0%] mt-1 w-full p-2 cursor-pointer bg-white border rounded-lg dark:border-gray-600 dark:bg-slate-900 outline-none">
            <ul>
              <li className="my-1 py-1">Name</li>
              <li className="my-1 py-1">Progress</li>
              <li className="my-1 py-1">Category</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
