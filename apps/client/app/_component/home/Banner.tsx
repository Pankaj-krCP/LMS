import React from "react";
import { FaArrowDown } from "react-icons/fa";
import LinkButton from "@repo/ui/linkButton";

const Banner = () => {
  return (
    <div className="flex relative items-center justify-center h-[65vh]">
      <div className="absolute text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-800 dark:text-gray-200">
          Empowering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Software Developers
          </span>
        </h1>
        <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 ">
          We focus on providing courses and resources to help software
          developers unlock their full potential and drive innovation in the
          tech industry.
        </p>

        <LinkButton rightArrow large shadow label="About Us" url="/about" />
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
