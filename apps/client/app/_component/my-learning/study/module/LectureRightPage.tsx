"use client";

import { courses, customShadow } from "../../../../_utils/constant";
import VideoPlayer from "./VideoPlayer";

import Description from "./Description";

const LectureRightPage = () => {
  return (
    <div className="px-2 my-3">
      <div className="flex-col">
        <div className={`${customShadow} rounded`}>
          <VideoPlayer url={courses[0]?.modules[0]?.lectures[0]?.url || ""} />
        </div>
        <div className={`rounded mt-2 ${customShadow}`}>
          <Description />
        </div>
      </div>
    </div>
  );
};

export default LectureRightPage;
