import React from "react";
import Image from "next/image";
import Link from "next/link";
import { testThumbnail } from "../../_utils/constant";

const CourseCard = () => {
  return (
    <div className="cursor-pointer bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden w-[100%] 800px:w-[30%]">
      <Link href={"course/single/jhjwfjhwbhje"}>
        <Image
          width={20}
          height={20}
          src={testThumbnail}
          alt="Course Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4 border border-t-0 border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-bold text-gray-500">Course Title</h3>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center">
              <span className="bg-blue-500 rounded-full items-center justify-center text-white font-bold text-sm p-1">
                4.8
              </span>
            </div>
            <p className="text-lg font-bold text-green-600">$49.99</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
