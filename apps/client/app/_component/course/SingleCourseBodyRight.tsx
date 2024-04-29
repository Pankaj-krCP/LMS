"use client";

import React, { useState } from "react";
import { courseDeatailsTabData, customShadow } from "../../_utils/constant";
import SingleCourseReviewsTab from "./SingleCourseReviewsTab";
import SingleCourseCurriculumTab from "./SingleCourseCurriculumTab";
import SingleCourseDescriptionTab from "./SingleCourseDescriptionTab";
import SingleCourseFAQTab from "./SingleCourseFAQTab";

const SingleCourseBodyRight = () => {
  const [activeTab, setActiveTab] = useState(courseDeatailsTabData[0]?.key);

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <SingleCourseDescriptionTab />;
      case "faq":
        return <SingleCourseFAQTab />;
      case "reviews":
        return <SingleCourseReviewsTab />;
      case "curriculum":
        return <SingleCourseCurriculumTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-col text-center">
      <div
        className={`m-4 p-3 inline-block border bg-white dark:bg-slate-900 dark:border-gray-600 rounded-full ${customShadow}`}
      >
        {courseDeatailsTabData.map((tab) => (
          <button
            key={tab.key}
            className={`mr-4 font-semibold ${activeTab === tab.key && "text-blue-500"}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-start my-2 p-2 mx-2 400px:mx-10 800px:mx-20">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SingleCourseBodyRight;
