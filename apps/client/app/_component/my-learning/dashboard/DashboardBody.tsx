"use client";
import React from "react";
import { underlineBlueCSS } from "../../../_utils/constant";
import Progress from "./CourseProgress";
import Calender from "./Calender";
import SubmittedWork from "./SubmittedWork";
import PendingWork from "./PendingWork";
import MyProgress from "./MyProgress";

const DashboardBody = () => {
  return (
    <div>
      <h1 className={`${underlineBlueCSS} text-2xl font-bold mb-4`}>
        Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Progress />
        <Calender />
        <PendingWork />
        <SubmittedWork />
        <MyProgress />
      </div>
    </div>
  );
};

export default DashboardBody;
