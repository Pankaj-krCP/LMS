import React from "react";
import { format } from "date-fns";
import { customShadow, underlineGreenCSS } from "../../../_utils/constant";
import Button from "@repo/ui/button";

const PendingWork = () => {
  const pendingTasks = [
    { id: 1, task: "Finish React component", dueDate: new Date(2024, 4, 10) },
    { id: 2, task: "Prepare for interview", dueDate: new Date(2024, 4, 15) },
  ];

  return (
    <div
      className={`bg-white dark:bg-slate-800 p-4 rounded-lg ${customShadow}`}
    >
      <h2 className={`${underlineGreenCSS} font-semibold mb-2`}>
        Pending Work
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
                Due Date
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
                  {format(task.dueDate, "MMMM dd, yyyy")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button label="Start" onClick={() => {}} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingWork;
