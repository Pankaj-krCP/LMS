"use client";

import { courseTopics } from "../../../_utils/constant";
import LectureRightPageTopic from "./LectureRightPageTopic";
import VideoPlayer from "./VideoPlayer";

const LectureRightPage = () => {
  const lectureData = courseTopics[0];
  return (
    <div>
      <div className="p-2">
        <LectureRightPageTopic
          module={lectureData?.module || 0}
          topic={lectureData?.topic || ""}
        />
        <div className="w-[75%]">
          <VideoPlayer lecture={lectureData?.lectures[0]} />
        </div>
      </div>
    </div>
  );
};

export default LectureRightPage;
