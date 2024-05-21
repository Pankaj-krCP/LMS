import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { customShadow } from "../../../_utils/constant";

interface Props {
  title: string;
}

const LectureRightPageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div
      className={`inline-flex items-center rounded-lg font-semibold bg-white dark:bg-slate-950 ${customShadow}`}
    >
      <div className="p-2 flex items-center gap-2 cursor-pointer hover:text-red-700">
        <FaArrowLeft />
        <p>Prev</p>
      </div>

      <div className="p-2 border-l dark:border-gray-600">
        <span className="text-blue-500">{title}</span>
      </div>

      <div className="p-2 border-l dark:border-gray-600 flex items-center gap-2 cursor-pointer hover:text-red-700">
        <p>Next</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default LectureRightPageTitle;
