"use client";

import React from "react";
import { courses } from "../../../_utils/constant";
import CourseCard from "../../../_component/common/CourseCard";
import { useParams } from "next/navigation";

const SearchBody = () => {
  const params = useParams();
  let { slug } = params;
  slug = (slug as string)?.toLowerCase();
  const filteredCourse = courses.filter(
    (item) =>
      item.id.toLowerCase().includes(slug) ||
      item.specializationId.toLowerCase().includes(slug) ||
      item.instructorId.toLowerCase().includes(slug) ||
      item.title.toLowerCase().includes(slug) ||
      item.tags.some((tag) => tag.toLowerCase().includes(slug))
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

export default SearchBody;
