import React from "react";
import { instructor, underlineBlueCSS } from "../../../_utils/constant";
import { FaUser } from "react-icons/fa";

const SingleCourseInstructorTab = ({
  instructorId,
}: {
  instructorId: string;
}) => {
  const instructorDetails = instructor.filter(
    (item) => item.id === instructorId
  )[0];
  return (
    <div>
      <div className="my-4">
        <h2 className={`${underlineBlueCSS} text-center`}>Instructor</h2>
      </div>
      <div className="flex justify-between mt-5 m-2 400px:m-10 800px:m-2">
        <div className="text-start">
          <h2 className="text-lg font-semibold">{instructorDetails?.name}</h2>
          <p className="">{instructorDetails?.education}</p>
          <div className="mt-4">
            <h3 className="text-md font-semibold">Experience</h3>
            {instructorDetails?.experience.map((exp, index) => (
              <div key={index} className="mt-2">
                <h4 className="text-sm font-semibold">{exp.position}</h4>
                <p className="text-xs ">{exp.company}</p>
                <p className="text-xs ">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <FaUser className="h-full text-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default SingleCourseInstructorTab;
