"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { courses } from "../../../_utils/constant";
import Button from "@repo/ui/button";

const SingleCourseHeader = () => {
  const router = useRouter();
  const params = useParams();
  const { courseId } = params;
  const courseTitle = courses.filter((item) => item.id === courseId)[0]?.title;
  const goBack = () => {
    router.back();
  };

  return (
    <div className="gap-2 w-full py-[6px] flex items-center justify-around bg-gray-50 dark:bg-slate-900">
      <div onClick={goBack} className="flex items-center gap-2 cursor-pointer">
        <FaArrowLeft />
        <p className="font-bold">Back</p>
      </div>
      <div className="w-[50%] text-center">
        <div className="w-full text-sm 800px:text-lg font-bold">
          {courseId} : {courseTitle}
        </div>
      </div>

      <Button label="Enroll" shadow fullRounded onClick={() => {}} />
    </div>
  );
};

export default SingleCourseHeader;
