"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SideLayout = () => {
  const [openTechnology, setOpenTechnology] = useState(true);
  const [openDevelopment, setOpenDevelopment] = useState(true);

  const technologies = ["JavaScript", "Python", "Java", "React", "Node.js"];
  const softwareDevelopmentOptions = [
    "Web Development",
    "Mobile Development",
    "Data Science",
    "DevOps",
  ];

  return (
    <div className="w-full p-4">
      <div className="mb-4">
        <button
          className="flex border-b dark:border-gray-600 items-center justify-between w-full text-left"
          onClick={() => setOpenTechnology(!openTechnology)}
        >
          <span className="font-semibold">Technology</span>
          <FaChevronDown
            className={`h-5 w-5 transform ${openTechnology ? "rotate-0" : "rotate-180"}`}
          />
        </button>
        {openTechnology && (
          <ul>
            {technologies.map((tech, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" id={tech} name={tech} className="mr-2" />
                <label htmlFor={tech}>{tech}</label>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button
          className="flex border-b dark:border-gray-600 items-center justify-between w-full text-left"
          onClick={() => setOpenDevelopment(!openDevelopment)}
        >
          <span className="font-semibold">Software Development</span>
          <FaChevronDown
            className={`h-5 w-5 transform ${openDevelopment ? "rotate-0" : "rotate-180"}`}
          />
        </button>
        {openDevelopment && (
          <ul>
            {softwareDevelopmentOptions.map((option, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideLayout;
