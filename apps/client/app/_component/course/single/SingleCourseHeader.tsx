"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { courses } from "../../../_utils/constant";
import { customShadow } from "../../../_utils/constant";

const SingleCourseHeader = () => {
  const router = useRouter();
  const params = useParams();
  const { courseId } = params;
  const courseTitle = courses.filter((item) => item.id === courseId)[0]?.title;
  const goBack = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={`inline-flex items-center m-2 rounded-lg font-semibold ${customShadow}`}
      >
        <div
          onClick={goBack}
          className="p-2 flex items-center gap-2 cursor-pointer hover:text-red-700"
        >
          <FaArrowLeft />
          <p>Back</p>
        </div>

        <Link href={"/course"}>
          <div className="p-2 border-l cursor-pointer dark:border-gray-600 hover:text-red-700">
            <FaHome size={24} />
          </div>
        </Link>

        <div className="p-2 border-l dark:border-gray-600">
          course:{" "}
          <span className="text-blue-500">
            {courseId} - {courseTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseHeader;
