"use client";

import React, { useState } from "react";
import DescriptionComment from "./DescriptionComment";
import DescriptionResource from "./DescriptionResource";
import DescriptionNote from "./DescriptionNote";

const Description = () => {
  const [activeTab, setActiveTab] = useState("comment");

  const renderTabContent = () => {
    switch (activeTab) {
      case "comment":
        return <DescriptionComment />;
      case "resource":
        return <DescriptionResource />;
      case "note":
        return <DescriptionNote />;
    }
  };

  return (
    <div className="py-2 px-4">
      <div className="border-b pb-2 dark:border-gray-600 flex gap-2 font-semibold">
        <p
          className={`cursor-pointer ${activeTab === "comment" && "text-blue-500"} hover:text-red-600`}
          onClick={() => {
            setActiveTab("comment");
          }}
        >
          Comment (2)
        </p>
        <p
          className={`cursor-pointer ${activeTab === "resource" && "text-blue-500"} hover:text-red-600`}
          onClick={() => {
            setActiveTab("resource");
          }}
        >
          Resources
        </p>
        <p
          className={`cursor-pointer ${activeTab === "note" && "text-blue-500"} hover:text-red-600`}
          onClick={() => {
            setActiveTab("note");
          }}
        >
          Notes
        </p>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Description;
