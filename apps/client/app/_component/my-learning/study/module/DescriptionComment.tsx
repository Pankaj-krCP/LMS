import React from "react";
import CustomInput from "../../../common/CustomInput";
import { IoMdSend } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

const DescriptionComment = () => {
  return (
    <div className="py-2">
      <div className="w-full my-2 rounded-lg flex items-center gap-2">
        <CustomInput small placehoder="Ask..." onChange={() => {}} />
        <div className="border-2 dark:border-gray-600 rounded p-2 shadow">
          <IoMdSend color={"blue"} size={28} />
        </div>
      </div>
      <div className="flex gap-1">
        <FaCircleUser size={24} className="cursor-pointer" />
        <div className="px-2 pb-2 rounded-lg bg-gray-100 dark:bg-slate-950">
          <div>
            <p className="text-sm font-semibold cursor-pointer">~ user123</p>
            <p>hello</p>
          </div>
          <div className="flex items-center gap-5 justifly-between">
            <div>
              <span className="text-sm text-blue-500 cursor-pointer">
                replies (1)
              </span>
            </div>
            <div className="flex gap-1 items-center mt-1">
              <div className="flex items-center">
                <AiTwotoneLike className="text-sm" />
                <span className="text-sm">1</span>
              </div>
              <div className="flex items-center">
                <AiTwotoneDislike className="text-sm" />
                <span className="text-sm">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionComment;
