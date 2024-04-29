import React from "react";
import LectureLeftPage from "../../../../_component/my-learning/study/LectureLeftPage";
import LectureRightPage from "../../../../_component/my-learning/study/LectureRightPage";

const page = () => {
  return (
    <div>
      <div className="fixed left-0 top-[50px] bottom-0 overflow-y-auto w-[20%]">
        <LectureLeftPage />
      </div>
      <div>
        <LectureRightPage />
      </div>
    </div>
  );
};

export default page;
