"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { courseData } from "../../_utils/constant";
import Button from "@repo/ui/button";

const SearchLayout = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="fixed gap-2 w-full py-[6px] flex items-center justify-around bg-white dark:bg-slate-900 border-b dark:border-gray-600">
      <div onClick={goBack} className="flex items-center gap-2 cursor-pointer">
        <FaArrowLeft />
        <p className="font-bold">Back</p>
      </div>
      <div className="w-[50%] text-center">
        <div className="w-full text-sm 800px:text-lg font-bold">
          {courseData.title}
        </div>
      </div>

      <Button label="Enroll" shadow fullRounded onClick={() => {}} />
    </div>
  );
};

export default SearchLayout;
