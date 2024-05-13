import React from "react";
import Image from "next/image";
import Link from "next/link";
import { customShadow, specialization } from "../../_utils/constant";

const CourseCard = ({ course }: { course: any }) => {
  const specializationTitle = specialization.filter(
    (item) => item.id === course?.specializationId
  );
  return (
    <div
      className={`rounded-lg border bg-white dark:bg-slate-900 border-gray-200 dark:border-gray-600 overflow-hidden w-64 ${customShadow} h-80`}
    >
      <Link href={`/course/single/${course?.id}`}>
        <Image
          width={10}
          height={10}
          src={course?.thumbnail || ""}
          alt="Course Image"
          className="w-full h-40 object-cover"
        />
      </Link>
      <div className="p-4">
        <div className="h-12">
          <Link href={`/course/specialization/${specializationTitle[0]?.slug}`}>
            <span className="text-blue-500 font-bold text-sm hover:underline">
              Specialization: {specializationTitle[0]?.title}
            </span>
          </Link>
        </div>

        <Link href={`/course/single/${course?.id}`}>
          <div>
            <div>
              <h3 className="text-md font-bold">
                {course?.id} : {course?.title}
              </h3>
            </div>
            <div>
              <span className="text-sm text-gray-400 dark:text-gray-600 font-semibold">
                20 hour
              </span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-green-600">$49.99</p>

              <div className="flex items-center rounded-lg border overflow-hidden dark:border-gray-600">
                <span className="bg-blue-600 items-center justify-center text-white font-bold text-sm px-2 py-1">
                  4.8
                </span>
                <span className="rounded-br-lg rounded-tr-lg items-center justify-center font-bold text-sm px-2 py-1">
                  50
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
