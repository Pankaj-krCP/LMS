import React from "react";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex relative items-center justify-center h-[65vh]">
      <div className="absolute text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Empowering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Software Developers
          </span>
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We focus on providing courses and resources to help software
          developers unlock their full potential and drive innovation in the
          tech industry.
        </p>
        <Link
          href="about"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          About Us
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
        <div>
          <div className="cursor-pointer border dark:border-gray-600 text-gray-800 dark:text-gray-300 rounded-full inline-block p-4 mt-8 dark:bg-gray-800 shadow-xl">
            <FaArrowDown className="animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
