import React, { useState } from "react";
import { FaCheckCircle, FaAngleDown } from "react-icons/fa";
import { customShadow } from "../../../_utils/constant";

const LectureLeftPageTopics = ({ topic }: { topic: any }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`p-1 py-4 my-2 border dark:border-gray-600 rounded-lg ${customShadow}`}
    >
      <div
        className="flex items-center justify-between px-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-1 items-center justify-start">
          <div>
            <span className="text-lg font-semibold">{topic.module}.</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{topic.topic}</h2>
          </div>
        </div>
        <div>
          <FaAngleDown />
        </div>
      </div>

      {isOpen && (
        <div className="ml-1 mt-1">
          <ul>
            {topic.lectures.map((lecture: any, index: number) => (
              <li key={index} className="flex my-1 ml-2 cursor-pointer">
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

export default LectureLeftPageTopics;
