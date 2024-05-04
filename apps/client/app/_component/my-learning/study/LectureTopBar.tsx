"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const LectureTopBar = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center w-full">
      <div className="flex gap-1 items-center justify-center border-r dark:border-gray-600 w-[20%] p-2">
        <FaArrowLeft className="cursor-pointer" onClick={goBack} />
        <h1 className="text-lg font-semibold">Table Of Content</h1>
      </div>
      <div className="flex gap-4 items-center justify-center w-[80%] p-2">
        <div className="cursor-pointer font-medium">
          <span>discussion</span>
        </div>
        <div className="cursor-pointer font-medium">
          <span>review</span>
        </div>
      </div>
    </div>
  );
};

export default LectureTopBar;
