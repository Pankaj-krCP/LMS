"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { courseData } from "../../_utils/constant";

const SearchLayout = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="fixed gap-2 w-full py-[6px] flex items-center justify-around bg-white dark:bg-gray-900 border-b dark:border-gray-600">
      <div onClick={goBack} className="flex items-center gap-2 cursor-pointer">
        <FaArrowLeft />
        <p className="font-bold">Back</p>
      </div>
      <div className="w-[50%] text-center">
        <div className="w-full text-sm 800px:text-lg font-bold">
          {courseData.title}
        </div>
      </div>

      <div>
        <button className="p-2 font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default SearchLayout;
