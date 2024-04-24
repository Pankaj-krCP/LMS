import React from "react";
import Link from "next/link";

const NavigateButton = () => {
  return (
    <div className="flex justify-center">
      <Link
        href="course"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center rounded-lg border dark:border-gray-600 focus:ring-blue-300 shadow-lg"
      >
        ALL Courses
        <svg
          className="w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};

export default NavigateButton;
