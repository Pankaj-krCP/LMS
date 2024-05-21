"use client";

import { courses, customShadow } from "../../../_utils/constant";
import CustomInput from "../../common/CustomInput";
import LectureRightPageTitle from "./LectureRightPageTitle";
import VideoPlayer from "./VideoPlayer";
import { IoMdSend } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const LectureRightPage = () => {
  return (
    <div className="p-2">
      <div className="mb-2">
        <LectureRightPageTitle
          title={courses[0]?.modules[0]?.lectures[0]?.title || ""}
        />
      </div>

      <div className="flex">
        <div
          className={`w-[70%] bg-white dark:bg-gray-950 ${customShadow} rounded`}
        >
          <VideoPlayer url={courses[0]?.modules[0]?.lectures[0]?.url || ""} />
        </div>
        <div
          className={`relative w-[30%]  bg-white dark:bg-gray-950 ml-2 rounded ${customShadow}`}
        >
          <div className="border-b dark:border-gray-600 flex p-2 gap-2 font-semibold">
            <p className="cursor-pointer text-blue-500">Comment</p>
            <p className="cursor-pointer">Resources</p>
            <p className="cursor-pointer">Notes</p>
          </div>
          <div className="p-2">
            <div className="flex gap-1">
              <FaCircleUser size={24} />
              <div className="px-2 pb-2 rounded bg-gray-200">
                <p className="text-sm font-semibold">~ user123</p>
                <p>hello</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full p-2 rounded-lg flex items-center gap-2">
            <CustomInput small placehoder="comment here" onChange={() => {}} />
            <div className="border-2 dark:border-gray-600 rounded p-2 shadow">
              <IoMdSend color={"blue"} size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureRightPage;
