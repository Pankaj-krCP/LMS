"use client";

import React, { useState } from "react";

const SideBar = () => {
  const [selected, setSelcted] = useState("dashboard");
  return (
    <div className="flex-col">
      <div
        className={`shadow m-2 p-4 rounded dark:border-gray-600 font-semibold cursor-pointer hover:text-white ${selected === "dashboard" ? "bg-blue-500 text-white" : "hover:bg-blue-300 hover:text-white"}`}
        onClick={() => {
          setSelcted("dashboard");
        }}
      >
        Dashboard
      </div>
      <div
        className={`shadow m-2 p-4 rounded dark:border-gray-600 font-semibold cursor-pointer hover:text-white ${selected === "add-course" ? "bg-blue-500 text-white" : "hover:bg-blue-300 hover:text-white"}`}
        onClick={() => {
          setSelcted("add-course");
        }}
      >
        Add Course
      </div>
      <div
        className={`shadow m-2 p-4 rounded dark:border-gray-600 font-semibold cursor-pointer hover:text-white ${selected === "all-course" ? "bg-blue-500 text-white" : "hover:bg-blue-300 hover:text-white"}`}
        onClick={() => {
          setSelcted("all-course");
        }}
      >
        ALL Course
      </div>
      <div
        className={`shadow m-2 p-4 rounded dark:border-gray-600 font-semibold cursor-pointer hover:text-white ${selected === "add-specialization" ? "bg-blue-500 text-white" : "hover:bg-blue-300 hover:text-white"}`}
        onClick={() => {
          setSelcted("add-specialization");
        }}
      >
        Add Specialization
      </div>
      <div
        className={`shadow m-2 p-4 rounded dark:border-gray-600 font-semibold cursor-pointer hover:text-white ${selected === "users" ? "bg-blue-500 text-white" : "hover:bg-blue-300 hover:text-white"}`}
        onClick={() => {
          setSelcted("users");
        }}
      >
        All Users
      </div>
    </div>
  );
};

export default SideBar;
