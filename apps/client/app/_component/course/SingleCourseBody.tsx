"use client";

import React, { useState } from "react";
import { courseData, testThumbnail } from "../../_utils/constant";
import Image from "next/image";

const underlineBlueCSS =
  "text-xl font-bold underline underline-offset-4 decoration-4 decoration-blue-400 dark:decoration-blue-600";

const instructor = {
  name: "Pankaj Kumar",
  education: "B.Tech in Computer Science, RTU University",
  experience: [
    {
      position: "Software Engineer",
      company: "CoingSync",
      duration: "2024 - Present",
    },
    {
      position: "Software Engineer",
      company: "ABC",
      duration: "2022 - 2023",
    },
    {
      position: "Software Engineer",
      company: "Self Employee",
      duration: "2021 - 2022",
    },
  ],
};

const SingleCourseBody = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="mb-4">
            <h2 className={`${underlineBlueCSS}`}>Course Details</h2>
            <p className="text-gray-600">{courseData.description}</p>
          </div>
        );
      case "faq":
        return (
          <div className="mb-4">
            <h2 className={`${underlineBlueCSS}`}>FAQ</h2>
            <p className="text-gray-600">{courseData.faq}</p>
          </div>
        );
      case "reviews":
        return (
          <div className="mb-4">
            <h2 className={`${underlineBlueCSS}`}>Rating and Reviews</h2>
            <p className="text-gray-600">Rating: {courseData.rating}</p>
            <p className="text-gray-600">
              Reviews: {courseData.reviews.length}
            </p>
          </div>
        );
      case "curriculum":
        return (
          <div className="mb-4">
            <h2 className={`${underlineBlueCSS} mb-6`}>Curriculum</h2>
            {renderCurriculum()}
          </div>
        );
      default:
        return null;
    }
  };

  const renderCurriculum = () => {
    return courseData.curriculum.map((item, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-xl font-bold underline underline-offset-4 decoration-2 decoration-green-400 dark:decoration-green-700">
          {item.title}
        </h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    ));
  };

  return (
    <div className="800px:flex">
      <div className="p-2 text-center 800px:fixed 800px:w-[30%] 800px:border-r dark:border-gray-600 left-0 top-[102px] bottom-0 overflow-y-auto ">
        <Image
          src={testThumbnail}
          alt={courseData.title}
          width={400}
          height={200}
          className="inline-block rounded-lg"
        />
        <div>
          <span className="text-xl font-bold underline underline-offset-4 decoration-4 decoration-blue-400 dark:decoration-blue-600">
            Instructor
          </span>
          <div className="text-start mt-5 ml-20 800px:ml-2">
            <h2 className="text-lg font-semibold">{instructor.name}</h2>
            <p className="text-sm text-gray-600">{instructor.education}</p>
            <div className="mt-4">
              <h3 className="text-md font-semibold">Experience</h3>
              {instructor.experience.map((exp, index) => (
                <div key={index} className="mt-2">
                  <h4 className="text-sm font-semibold">{exp.position}</h4>
                  <p className="text-xs text-gray-600">{exp.company}</p>
                  <p className="text-xs text-gray-600">{exp.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 800px:fixed 800px:w-[70%] left-[30%] top-[102px] bottom-0 overflow-y-auto">
        <div className="flex-col text-center">
          <div className="m-4 p-3 inline-block border dark:border-gray-600 rounded-full shadow-xl">
            <button
              className={`mr-4 ${activeTab === "description" && "text-blue-500"}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`mr-4 ${activeTab === "faq" && "text-blue-500"}`}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </button>
            <button
              className={`mr-4 ${activeTab === "reviews" && "text-blue-500"}`}
              onClick={() => setActiveTab("reviews")}
            >
              Rating & Reviews
            </button>
            <button
              className={`mr-4 ${activeTab === "curriculum" && "text-blue-500"}`}
              onClick={() => setActiveTab("curriculum")}
            >
              Curriculum
            </button>
          </div>
          <div className="text-start mt-10 ml-20 800px:ml-15">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseBody;
