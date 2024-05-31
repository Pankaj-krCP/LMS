"use client";

import React, { useState } from "react";
import { FaVideo, FaFilePdf } from "react-icons/fa";

const LectureSideBarModule = ({ module }: { module: any }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`py-2 mb-1`}>
      <div
        className="flex items-center justify-between px-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <p className={`font-bold hover:text-red-600`}>{module.title}</p>
        </div>
      </div>

      {isOpen && (
        <div className="ml-1 mt-1">
          <ul>
            {module.lectures.map((lecture: any, index: number) => (
              <li key={index} className="flex items-center">
                {lecture?.type === "video" && (
                  <div className="w-full">
                    <div className="flex m-1 cursor-pointer items-center gap-1">
                      <span className="text-sm text-green-400 dark:text-green-700">
                        <FaVideo />
                      </span>

                      <span className="hover:text-red-600">
                        {lecture?.title}
                      </span>
                      <span className="text-sm px-1 bg-gray-200 dark:bg-gray-700 rounded">
                        1h:3m
                      </span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div className="w-[60%] h-[2px] bg-green-300 dark:bg-green-700 rounded-full"></div>
                    </div>
                  </div>
                )}
                {lecture?.type === "article" && (
                  <div className="w-full">
                    <div className="flex m-1 cursor-pointer items-center gap-1">
                      <span className="text-sm text-red-400 dark:text-red-700">
                        <FaFilePdf />
                      </span>

                      <span className="hover:text-red-600">
                        {lecture?.title}
                      </span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div className="w-[30%] h-[2px] bg-red-300 dark:bg-red-700 rounded-full"></div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LectureSideBarModule;
