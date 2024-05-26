import React from "react";
import { underlineGreenCSS } from "../../../../_utils/constant";
import { FaStar, FaUser } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const UserReview = () => {
  return (
    <div className="p-1">
      <div className={`flex items-center my-2 ${underlineGreenCSS}`}>
        <FaStar className="text-yellow-500 mr-1" />
        <span>
          Rating: {4.5} ({1})
        </span>
      </div>
      <div className="mb-4 p-2 border dark:border-gray-600 rounded-lg items-center">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center font-semibold">
            <FaUser />
            <span>{"Alice"}</span>
          </div>
          <div className="flex gap-2 items-center font-semibold">
            <span>4.5</span>
            <FaStar className="text-yellow-300" />
          </div>
        </div>

        <div className="flex my-2">
          <FaQuoteLeft size={22} className="-mt-1 mr-1 inline-block" />
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              recusandae neque similique asperiores nobis corrupti molestiae,
              inventore obcaecati, labore, est dolor aut sunt quo illo
              explicabo? Neque error aspernatur est.
            </span>
            <FaQuoteRight size={10} className="-mb-2 ml-1 inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
