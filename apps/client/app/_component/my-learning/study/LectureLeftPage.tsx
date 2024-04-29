"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { courseTopics } from "../../../_utils/constant";
import LectureLeftPageTopics from "./LectureLeftPageTopics";

const LectureLeftPage = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <div className="flex gap-4 items-center border-b dark:border-gray-600 p-3">
        <FaArrowLeft className="cursor-pointer" onClick={goBack} />
        <h1 className="text-xl font-semibold">Table Of Content</h1>
      </div>
      <div className="p-2">
        {courseTopics.map((topic, index) => (
          <LectureLeftPageTopics key={index} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default LectureLeftPage;
