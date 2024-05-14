import React from "react";
import { customShadow } from "../../_utils/constant";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`bg-white dark:bg-gray-950 rounded-lg p-6 ${customShadow}`}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">About DevHome</h1>
        <p className="text-lg mb-4">
          DevHome is a modern platform that offers a wide range of software
          courses with specializations. Users can enroll in courses and learn
          from industry experts.
        </p>
        <p className="text-lg mb-4">
          In addition to courses, DevHome also provides articles on various tech
          topics, keeping users updated with the latest trends and advancements
          in the industry.
        </p>
        <p className="text-lg mb-4">
          Our community page allows users to engage with each other, ask
          questions, and share their knowledge and experiences.
        </p>
        <p className="text-lg mb-4">
          The playground page offers tech-based games, providing users with a
          fun and interactive way to learn and explore different technologies.
        </p>
        <p className="text-lg">
          Join DevHome today and take your software skills to the next level!
        </p>
      </div>
    </div>
  );
};

export default page;
