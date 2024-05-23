import React from "react";
import EnrolledCourseCard from "./EnrolledCourseCard";

const MainBody = () => {
  return (
    <div>
      <div className="m-2">
        <span className="font-semibold">Specialization : </span>
        <span className="text-blue-500 cursor-pointer">
          Web development professional
        </span>
      </div>
      <div className="flex gap-5 overflow-x-auto px-4 py-2 border bg-gray-100 dark:bg-slate-950 dark:border-gray-600 rounded-lg">
        <EnrolledCourseCard
          title={"React"}
          progress={"0"}
          started={false}
          paused={false}
        />
        <EnrolledCourseCard
          title={"Next"}
          progress={"50"}
          started={true}
          paused={false}
        />
        <EnrolledCourseCard
          title={"Express"}
          progress={"30"}
          started={true}
          paused={true}
        />
        <EnrolledCourseCard
          title={"MongoDB"}
          progress={"100"}
          started={true}
          paused={false}
        />
      </div>
    </div>
  );
};

export default MainBody;
