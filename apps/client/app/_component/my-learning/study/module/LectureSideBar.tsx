"use client";

import React from "react";
import { courses } from "../../../../_utils/constant";
import LectureSideBarModule from "./LectureSideBarModule";
import { useRouter } from "next/navigation";

const LectureSideBar = () => {
  const router = useRouter();
  const handleDiscussion = () => {
    router.push("/my-learning/study/slug/discussion");
  };
  const handleReview = () => {
    router.push("/my-learning/study/slug/write-review");
  };
  return (
    <div className="p-2">
      {courses[0]?.modules?.map((module, index) => (
        <LectureSideBarModule key={index} module={module} />
      ))}
      <div
        className="cursor-pointer hover:text-red-600"
        onClick={() => {
          handleDiscussion();
        }}
      >
        <p className="p-2 mb-1 font-bold">Discussion</p>
      </div>
      <div
        className="cursor-pointer hover:text-red-600"
        onClick={() => {
          handleReview();
        }}
      >
        <p className="p-2 font-bold">Review</p>
      </div>
    </div>
  );
};

export default LectureSideBar;
