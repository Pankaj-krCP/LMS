"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  courses,
  courseDeatailsTabData,
  customShadow,
} from "../../../_utils/constant";
import SingleCourseReviewsTab from "./SingleCourseReviewsTab";
import SingleCourseCurriculumTab from "./SingleCourseCurriculumTab";
import SingleCourseDescriptionTab from "./SingleCourseDescriptionTab";
import SingleCourseFAQTab from "./SingleCourseFAQTab";
import SingleCourseInstructorTab from "./SingleCourseInstructorTab";
import Button from "@repo/ui/button";

const SingleCourseBody = () => {
  const params = useParams();
  const { courseId } = params;
  const courseData = courses.filter((item) => item.id === courseId)[0];
  const [activeTab, setActiveTab] = useState(courseDeatailsTabData[0]?.key);

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <SingleCourseDescriptionTab
            description={courseData?.description || ""}
          />
        );
      case "faq":
        return <SingleCourseFAQTab faq={courseData?.faq || []} />;
      case "reviews":
        return (
          <SingleCourseReviewsTab
            rating={"4.7"}
            reviews={courseData?.reviews || []}
          />
        );
      case "modules":
        return (
          <SingleCourseCurriculumTab curriculum={courseData?.modules || []} />
        );
      case "instructor":
        return (
          <SingleCourseInstructorTab
            instructorId={courseData?.instructorId || ""}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-center">
      <div
        className={`m-4 p-3 inline-block border   dark:border-gray-600 rounded-full ${customShadow}`}
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
      <div
        className={`p-2 m-2 400px:mx-10 800px:max-w-[50%] 800px:mx-auto rounded-lg ${customShadow}`}
      >
        <div className="text-start">{renderTabContent()}</div>
      </div>
      <div className="mx-2 my-4 400px:mx-10 800px:max-w-[50%] 800px:mx-auto">
        <Button label="Enroll" fullWidth shadow onClick={() => {}} />
      </div>
    </div>
  );
};

export default SingleCourseBody;
