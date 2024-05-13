import React, { useEffect, useState } from "react";
import { specialization, courses } from "../../_utils/constant";
import { FaFolderPlus, FaFolderOpen } from "react-icons/fa";
import Link from "next/link";

const Filter: React.FC = () => {
  const [openOptions, setOpenOptions] = useState("");
  const [options, setOptions] = useState<{ id: string; title: string }[]>([]);
  useEffect(() => {
    if (openOptions !== "") {
      const filteredCourse = courses.filter(
        (item) => item?.specializationId === openOptions
      );
      setOptions(filteredCourse);
    }
  }, [openOptions]);
  return (
    <div>
      {specialization.map((item, index) => {
        return (
          <div key={index} className="py-2">
            <div>
              <div className="flex justify-between items-center">
                <Link href={`/course/specialization/${item.slug}`}>
                  <div className="cursor-pointer hover:text-red-600">
                    <span className="text-md font-semibold">
                      {item.id} : {item.title}
                    </span>
                  </div>
                </Link>
                <div
                  onClick={() => {
                    setOpenOptions(openOptions === item?.id ? "" : item?.id);
                  }}
                >
                  <span
                    className={`text-lg cursor-pointer hover:text-red-600 ${openOptions === item?.id && "text-red-600"}`}
                  >
                    {openOptions === item?.id ? (
                      <FaFolderOpen size={20} />
                    ) : (
                      <FaFolderPlus size={18} />
                    )}
                  </span>
                </div>
              </div>
              {openOptions === item?.id && (
                <div className="p-2 absolute w-full left-[100%] top-[0%] ml-1 rounded-lg border dark:border-gray-600 bg-white dark:bg-slate-900 shadow-lg ${customShadow}">
                  {options?.map((item, index) => {
                    return (
                      <Link href={`/course/single/${item.id}`}>
                        <div
                          key={index}
                          className="text-sm p-1 font-semibold cursor-pointer hover:text-red-600"
                        >
                          <p>
                            {item?.id} : {item?.title}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
