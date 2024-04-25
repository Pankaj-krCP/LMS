"use client";

import React, { useState } from "react";
import { courseData, testThumbnail } from "../../_utils/constant";
import Image from "next/image";

const SingleCoursePage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Course Details</h2>
            <p className="text-gray-600">{courseData.description}</p>
          </div>
        );
      case "faq":
        return (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <p className="text-gray-600">{courseData.faq}</p>
          </div>
        );
      case "reviews":
        return (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Rating and Reviews</h2>
            <p className="text-gray-600">Rating: {courseData.rating}</p>
            <p className="text-gray-600">
              Reviews: {courseData.reviews.length}
            </p>
          </div>
        );
      case "curriculum":
        return (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Curriculum</h2>
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
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 p-8">
      <div className="flex text-center items-center justify-center">
        <div>
          <div className="mb-4">
            <Image
              src={testThumbnail}
              alt={courseData.title}
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="mb-4 text-center">
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
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
