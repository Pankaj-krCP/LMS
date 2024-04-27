import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { underlineGreenCSS } from "../../../_utils/constant";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyProgress = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const mernStackProgress = [30, 40, 50, 60, 70, 80, 90];
  const dsaProgress = [5, 15, 25, 35, 45, 55, 65];
  const blockchainProgress = [10, 20, 30, 40, 50, 60, 70];

  const data = {
    labels,
    datasets: [
      {
        label: "MERN Stack",
        data: mernStackProgress,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "DSA",
        data: dsaProgress,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Blockchain",
        data: blockchainProgress,
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Progress Chart",
      },
    },
    scales: {
      x: {
        type: "category",
        labels: labels,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Progress (%)",
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg col-span-2">
      <h2 className={`${underlineGreenCSS} text-lg font-semibold mb-2`}>
        Progress Chart
      </h2>
      <div className="h-auto w-full">
        <Bar data={data} options={options as any} />
      </div>
    </div>
  );
};

export default MyProgress;
