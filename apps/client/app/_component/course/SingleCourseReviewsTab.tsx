import React from "react";
import {
  courseData,
  underlineBlueCSS,
  underlineGreenCSS,
} from "../../_utils/constant";
import { FaStar, FaUser } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const SingleCourseReviewsTab = () => {
  return (
    <div>
      <div className="my-4">
        <h2 className={`${underlineBlueCSS}`}>Rating and Reviews</h2>
      </div>
      <div className="p-1">
        <div className={`flex items-center my-2 ${underlineGreenCSS}`}>
          <FaStar className="text-yellow-500 mr-1" />
          <span>
            Rating: {courseData.rating} ({courseData.reviews.length})
          </span>
        </div>
        <div>
          {courseData.reviews.map((review) => (
            <div
              key={review.id}
              className="mb-4 p-2 border dark:border-gray-600 rounded-lg items-center"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center font-semibold">
                  <FaUser />
                  <span>{review.user}</span>
                </div>
                <div className="flex gap-2 items-center font-semibold">
                  <span>{review.rating}</span>
                  <FaStar className="text-yellow-300" />
                </div>
              </div>

              <div className="flex my-2">
                <FaQuoteLeft size={22} className="-mt-1 mr-1 inline-block" />
                <div>
                  <span>{review.review}</span>
                  <FaQuoteRight size={10} className="-mb-2 ml-1 inline-block" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCourseReviewsTab;
