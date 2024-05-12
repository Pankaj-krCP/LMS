import React from "react";
import { underlineBlueCSS, underlineGreenCSS } from "../../../_utils/constant";

interface Props {
  curriculum: { title: string }[];
}

const SingleCourseCurriculumTab: React.FC<Props> = ({ curriculum }) => {
  return (
    <div>
      <div className="my-4">
        <h2 className={`${underlineBlueCSS} text-center`}>Curriculum</h2>
      </div>
      <div className="p-1">
        {curriculum.map((item, index) => (
          <div key={index} className="mb-4">
            <div className={`${underlineGreenCSS}`}>
              <span>{item?.title}</span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quo optio praesentium vero dignissimos blanditiis corrupti
                suscipit! Cumque, dolore quam, error doloribus rerum praesentium
                distinctio, totam doloremque qui excepturi ipsum?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCourseCurriculumTab;
