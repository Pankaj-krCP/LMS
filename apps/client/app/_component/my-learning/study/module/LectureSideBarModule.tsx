"use client";

import React, { useState } from "react";
import { FaCheckCircle, FaVideo, FaFilePdf } from "react-icons/fa";

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
                {/* <span className="mr-1 mt-1">
                  <FaCheckCircle size={16} fill={"green"} />
                </span> */}

                {lecture?.type === "video" && (
                  <div className="flex mt-2 ml-2 cursor-pointer items-center gap-1">
                    <span className="text-sm opacity-50">
                      <FaVideo />
                    </span>
                    <span className="hover:text-red-600">{lecture?.title}</span>
                    <span className="text-sm px-1 bg-gray-200 dark:bg-gray-700 rounded">
                      1h:3m
                    </span>
                  </div>
                )}
                {lecture?.type === "article" && (
                  <div className="flex mt-2 ml-2 cursor-pointer items-center gap-1">
                    <span className="text-sm opacity-50">
                      <FaFilePdf />
                    </span>
                    <span className="hover:text-red-600">{lecture?.title}</span>
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
