"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaHome,
  FaAngleRight,
} from "react-icons/fa";

const LectureTopBar = () => {
  const router = useRouter();
  const goBack = () => {
    router.push("/my-learning/study");
  };

  return (
    <div className="flex items-center w-full">
      <div className="flex gap-1 items-center justify-center border-r dark:border-gray-600 w-[20%] p-2">
        <h1 className="text-lg font-semibold">Menu</h1>
      </div>
      <div className="flex items-center justify-between w-[80%] px-4 py-2">
        <div className="flex items-center gap-1">
          <div
            className="cursor-pointer hover:text-red-600"
            onClick={() => goBack()}
          >
            <FaHome size={18} />
          </div>
          <div>
            <FaAngleRight size={18} />
          </div>
          <div>
            <span>Module 1</span>
          </div>
          <div>
            <FaAngleRight size={18} />
          </div>
          <div>
            <span className="text-blue-500 font-semibold">
              Introduction to Array
            </span>
          </div>
        </div>
        <div className={`flex gap-5 font-semibold`}>
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-red-700">
            <FaArrowLeft size={12} />
            <p>Previous</p>
          </div>
          <div className="flex cursor-pointer">
            <span className="mr-1 mt-1">
              <FaCheckCircle size={16} fill={"gray"} />
            </span>
            <p className="hover:text-red-600">Mark as Read</p>
          </div>
          <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-red-700">
            <p>Next</p>
            <FaArrowRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureTopBar;
