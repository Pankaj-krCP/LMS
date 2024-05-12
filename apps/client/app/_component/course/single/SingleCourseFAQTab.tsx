import React from "react";
import { underlineBlueCSS, underlineGreenCSS } from "../../../_utils/constant";

const SingleCourseFAQTab = ({ faq }: { faq: any }) => {
  return (
    <div>
      <div className="my-4">
        <h2 className={`${underlineBlueCSS} text-center`}>FAQ</h2>
      </div>
      <div className="p-1">
        {faq.map((item: any, index: number) => {
          return (
            <div key={index} className="mb-4">
              <p className={`${underlineGreenCSS} `}>Q. {item.question}</p>
              <p>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCourseFAQTab;
