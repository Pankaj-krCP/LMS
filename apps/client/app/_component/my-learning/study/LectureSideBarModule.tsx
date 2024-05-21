"use client";

import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { customShadow, underlineGreenCSS } from "../../../_utils/constant";

const LectureSideBarModule = ({ module }: { module: any }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`p-1 py-4 border mb-2 dark:border-gray-600 rounded-lg ${customShadow} `}
    >
      <div
        className="flex items-center justify-between px-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <p className={`font-semibold ${underlineGreenCSS}`}>{module.title}</p>
        </div>
      </div>

      {isOpen && (
        <div className="ml-1 mt-1">
          <ul>
            {module.lectures.map((lecture: any, index: number) => (
              <li key={index} className="flex mt-2 ml-2 cursor-pointer">
                <span className="mr-1 mt-1">
                  <FaCheckCircle size={16} fill={"green"} />
                </span>
                <span>{lecture?.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LectureSideBarModule;
