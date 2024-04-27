import React from "react";
import { Pie } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { underlineGreenCSS } from "../../../_utils/constant";
// import Image from "next/image";

const Progress = () => {
  const courseProgress = {
    Completed: 25,
    InProgress: 40,
    NotStarted: 35,
  };

  const pieData = {
    labels: Object.keys(courseProgress),
    datasets: [
      {
        data: Object.values(courseProgress),
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <div className="bg-white dark:bg-slate-800 p-2 mb-4 shadow-lg rounded-lg flex items-center justify-center gap-2">
        <div className="rounded-full h-28 w-28 bg-slate-600">
          {/* <Image
            width={20}
            height={20}
            src={
              "profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg"
            }
            alt="Profile pic"
          /> */}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center">
            Welcome, Pankaj Kumar!
          </h1>
          <p className="text-center text-gray-500">
            We're glad to have you here.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg">
        <h2 className={`${underlineGreenCSS} text-lg font-semibold mb-2`}>
          My Course Progress
        </h2>

        <div className="flex items-center justify-between overflow-hidden">
          <div className="w-[40%]">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
              <p className="text-gray-400">
                {courseProgress.Completed}% Completed
              </p>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
              <p className="text-gray-400">
                {courseProgress.InProgress}% In Progress
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-400 rounded-full mr-2"></div>
              <p className="text-gray-400">
                {courseProgress.NotStarted}% Not Started
              </p>
            </div>
          </div>
          <div className="w-[60%] -my-14">
            <Pie data={pieData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
