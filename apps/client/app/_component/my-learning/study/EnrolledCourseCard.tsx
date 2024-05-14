"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { customShadow } from "../../../_utils/constant";
import Button from "@repo/ui/button";

interface Props {
  title: string;
  progress: string;
  started: boolean;
  paused: boolean;
}

const EnrolledCourseCard: React.FC<Props> = ({
  title,
  progress,
  started,
  paused,
}) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/my-learning/study/courseid");
  };

  return (
    <div
      className={`${paused ? "border border-yellow-500" : customShadow} relative p-4 rounded-lg mb-4 min-w-[60%] bg-white dark:bg-slate-700 `}
    >
      <h2 className={`text-lg font-semibold mb-2`}>{title}</h2>
      <div
        className={`${paused ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={onClickHandler}
      >
        <p className="text-gray-400">Progress: {progress}% completed</p>
        <div
          className={`${progress === "100" || started === false ? "bg-green-500" : "bg-gray-200"} w-full rounded mt-2`}
        >
          <div
            className={`${
              started
                ? progress !== "100"
                  ? "bg-blue-500"
                  : ""
                : "bg-gray-400"
            } text-md font-semibold py-1 text-center text-white rounded`}
            style={{ width: `${started ? progress : 100}%` }}
          >
            {started
              ? progress === "100"
                ? "Completed"
                : progress + "%"
              : "Start Today"}
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-2 m-2">
        <Button
          label={paused ? "RESUME" : "PAUSE"}
          onClick={() => {}}
          secondary
        />
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
