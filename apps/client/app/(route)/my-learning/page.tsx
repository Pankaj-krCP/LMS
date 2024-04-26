"use client";

import React from "react";
import { underlineBlueCSS } from "../../_utils/constant";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { format } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const totalProgress = 60;

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const events = [
    { id: 1, title: "Meeting with client", date: new Date(2024, 4, 1) },
    { id: 2, title: "Submit project proposal", date: new Date(2024, 4, 5) },
  ];

  const pendingTasks = [
    { id: 1, task: "Finish React component", dueDate: new Date(2024, 4, 10) },
    { id: 2, task: "Prepare for interview", dueDate: new Date(2024, 4, 15) },
  ];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
          text: "Value",
        },
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className={`${underlineBlueCSS} text-2xl font-bold mb-4`}>
        Dashboard
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Total Progress</h2>
          <p className="text-gray-400">{totalProgress}% completed</p>
          <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg col-span-2">
            <div className="h-64">
              <Pie data={pieData} />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Calendar</h2>
          <Calendar
            className="border-gray-200 border-2 rounded-lg custom-calendar"
            tileClassName={({ date }) => {
              const event = events.find(
                (event) => event.date.toDateString() === date.toDateString()
              );
              return event ? "bg-blue-200" : null;
            }}
          />
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Selected Schedule</h2>
          <p className="text-gray-400">Your selected schedule here</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Pending Tasks</h2>
          <ul className="text-gray-400">
            {pendingTasks.map((task) => (
              <li
                key={task.id}
              >{`${task.task} - Due Date: ${format(task.dueDate, "MMMM dd, yyyy")}`}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg col-span-2">
          <h2 className="text-lg font-semibold mb-2">Progress Chart</h2>
          <div className="h-64">
            <Bar data={data} options={options as any} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
