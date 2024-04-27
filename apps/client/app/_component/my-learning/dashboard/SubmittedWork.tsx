import React from "react";
import { format } from "date-fns";
import { underlineGreenCSS } from "../../../_utils/constant";

const SubmittedWork = () => {
  const pendingTasks = [
    {
      id: 1,
      task: "Finish React component",
      submissionDate: new Date(2024, 4, 10),
    },
    {
      id: 2,
      task: "Prepare for interview",
      submissionDate: new Date(2024, 4, 15),
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg">
      <h2 className={`${underlineGreenCSS} font-semibold mb-2`}>
        Submitted Work
      </h2>
      <div className="overflow-x-auto border rounded-lg">
        <table className="max-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Task
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Submission Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingTasks.map((task) => (
              <tr key={task.id}>
                <td className="px-6 py-4 whitespace-nowrap">{task.task}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(task.submissionDate, "MMMM dd, yyyy")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Submitted
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedWork;
