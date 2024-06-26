import React from "react";
import ReviewForm from "../../../../../_component/my-learning/study/write-review/ReviewForm";
import UserReview from "../../../../../_component/my-learning/study/write-review/UserReview";
import { underlineBlueCSS } from "../../../../../_utils/constant";

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="my-4">
        <h2 className={`${underlineBlueCSS} text-center`}>Leave a Review</h2>
      </div>
      <ReviewForm />
      <hr className="dark:border-gray-600 mt-4" />
      <div className="my-4">
        <h2 className={`${underlineBlueCSS} text-center`}>All Reviews</h2>
      </div>
      <UserReview />
    </div>
  );
};

export default page;
