"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { customShadow } from "../../../_utils/constant";
import Link from "next/link";

const SearchHeader = () => {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;
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
          Search : <span className="text-blue-500">{slug}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
