import React from "react";
import { underlineBlueCSS } from "../../../_utils/constant";

const Discussion = () => {
  return (
    <div className="p-4">
      <h1 className={`${underlineBlueCSS} text-2xl font-bold mb-4`}>
        Discussion
      </h1>
      <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg">
        <h2 className={`text-lg font-semibold mb-2`}>Global Discussion</h2>
        <p className="text-gray-400">Join the global discussion here</p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-4 shadow-lg rounded-lg mt-4">
        <h2 className="text-lg font-semibold mb-2">Course Discussion</h2>
        <p className="text-gray-400">Join the course discussion here</p>
      </div>
    </div>
  );
};

export default Discussion;
