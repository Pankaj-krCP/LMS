import React from "react";
import { format } from "date-fns";
import { customShadow, underlineGreenCSS } from "../../../_utils/constant";

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
    <div className={`  p-4 rounded-lg ${customShadow}`}>
      <h2 className={`${underlineGreenCSS} font-semibold mb-2`}>
        Submitted Work
      </h2>
      <div className="overflow-x-auto border dark:border-gray-600 rounded-lg">
        <table className="max-w-full divide-y dark:divide-gray-600">
          <thead className="bg-gray-50 dark:bg-slate-950">
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
                Submitted
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-600">
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
