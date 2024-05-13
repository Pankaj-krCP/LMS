"use client";

import React from "react";
import { courses, specialization } from "../../../_utils/constant";
import CourseCard from "../../../_component/common/CourseCard";
import { useParams } from "next/navigation";

const SpecializationBody = () => {
  const params = useParams();
  const { slug } = params;
  const SpecializationId = specialization.filter(
    (item) => item.slug === slug
  )[0]?.id;
  const filteredCourse = courses.filter(
    (item) => item?.specializationId === SpecializationId
  );
  return (
    <div className="flex my-10 mx-20 gap-10 items-center flex-wrap">
      {filteredCourse.map((item, index) => {
        return (
          <div key={index}>
            <CourseCard course={item} />
          </div>
        );
      })}
    </div>
  );
};

export default SpecializationBody;
