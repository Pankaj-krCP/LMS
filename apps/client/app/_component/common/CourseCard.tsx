import React from "react";
import Image from "next/image";
import Link from "next/link";
import { testThumbnail } from "../../_utils/constant";

const CourseCard = () => {
  return (
    <div className="cursor-pointer rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden w-[100%] 800px:w-[30%]">
      <Link href={"course/single/jhjwfjhwbhje"}>
        <Image
          width={20}
          height={20}
          src={testThumbnail}
          alt="Course Image"
          className="w-full h-48 object-fit"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-500">Course Title</h3>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-lg font-bold text-green-600">$49.99</p>

            <div className="flex items-center rounded-lg border overflow-hidden dark:border-gray-600">
              <span className="bg-blue-600 items-center justify-center text-white font-bold text-sm px-2 py-1">
                4.8
              </span>
              <span className=" rounded-br-lg rounded-tr-lg items-center justify-center font-bold text-sm px-2 py-1">
                50
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
