"use client";

import Button from "@repo/ui/button";
import React, { useState } from "react";

const ClientBody = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="pt-[70px] text-center bg-green-200 dark:bg-neutral-700">
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="p-4 m-16 w-[50%] border rounded-lg dark:border-gray-600 dark:bg-zinc-800 shadow-lg outline-none focus:ring-1 focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-[70px]">
        <h1 className="text-center text-2xl 800px:text-4xl font-bold mb-4 px-4">
          Your Coding Education Journey Starts Here
        </h1>
        <p className="text-center text-md 800px:text-lg mb-8 px-4">
          Unlock the power of coding with our expert-led courses
        </p>
        <Button title="get started" />
      </div>
    </div>
  );
};

export default ClientBody;
