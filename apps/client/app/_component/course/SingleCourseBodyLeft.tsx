import React from "react";
import { courseData, instructor } from "../../_utils/constant";
import Image from "next/image";

const SingleCourseBodyLeft = () => {
  return (
    <div>
      <Image
        src={courseData.thumbnail}
        alt={courseData.title}
        width={400}
        height={200}
        className="inline-block rounded-lg"
      />
      <div>
        <span className="text-xl font-bold underline underline-offset-4 decoration-4 decoration-blue-400 dark:decoration-blue-600">
          Instructor
        </span>
        <div className="text-start mt-5 m-2 400px:m-10 800px:m-2">
          <h2 className="text-lg font-semibold">{instructor.name}</h2>
          <p className="">{instructor.education}</p>
          <div className="mt-4">
            <h3 className="text-md font-semibold">Experience</h3>
            {instructor.experience.map((exp, index) => (
              <div key={index} className="mt-2">
                <h4 className="text-sm font-semibold">{exp.position}</h4>
                <p className="text-xs ">{exp.company}</p>
                <p className="text-xs ">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseBodyLeft;
