"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Option = {
  title: string;
  options: string[];
};

const SideLayout: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});

  const options: Option[] = [
    {
      title: "Web Development",
      options: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Mobile Development",
      options: ["Android", "iOS", "React Native"],
    },
    {
      title: "Data Science",
      options: ["Python", "R", "SQL"],
    },
    {
      title: "DevOps",
      options: ["Docker", "Kubernetes", "Jenkins"],
    },
  ];

  const toggleOption = (category: string, option: string) => {
    const newSelectedOptions = { ...selectedOptions };
    if (newSelectedOptions[category]?.includes(option)) {
      newSelectedOptions[category] =
        newSelectedOptions[category]?.filter((item) => item !== option) || [];
    } else {
      newSelectedOptions[category] = [
        ...(newSelectedOptions[category] ?? []),
        option,
      ];
    }
    setSelectedOptions(newSelectedOptions);
  };

  const isOptionSelected = (category: string, option: string) => {
    return selectedOptions[category]?.includes(option);
  };

  const toggleAllOptions = (category: string) => {
    const newSelectedOptions = { ...selectedOptions };
    if (newSelectedOptions[category]) {
      delete newSelectedOptions[category];
    } else {
      newSelectedOptions[category] =
        options.find((opt) => opt.title === category)?.options ?? [];
    }
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className="w-full p-4">
      {options.map((category, index) => (
        <div key={index}>
          <div className="flex gap-2 items-center mb-2">
            <input
              type="checkbox"
              id={category.title}
              className="mr-2"
              checked={
                selectedOptions[category.title]?.length ===
                category.options.length
              }
              onChange={() => toggleAllOptions(category.title)}
            />
            <label
              htmlFor={category.title}
              className="font-semibold cursor-pointer"
            >
              {category.title}
              <FaChevronDown className="inline-block m-2" />
            </label>
          </div>
          <ul
            className={`ml-4 ${selectedOptions[category.title] ? "" : "hidden"}`}
          >
            {category.options.map((option, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  className="mr-2"
                  checked={isOptionSelected(category.title, option)}
                  onChange={() => toggleOption(category.title, option)}
                />
                <label htmlFor={option} className="cursor-pointer">
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideLayout;
