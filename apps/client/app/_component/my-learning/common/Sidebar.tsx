"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { title: "Dashboard", url: "/my-learning" },
  { title: "Study", url: "/my-learning/study" },
  { title: "Discussion", url: "/my-learning/discussion" },
  { title: "certificate", url: "/my-learning/certificate" },
];

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Dashboard");
  const pathname = usePathname();
  const paths = pathname.split("/");

  return (
    <div
      className={`${paths[2] === "study" && paths.length > 3 ? "hidden" : ""}`}
    >
      {navigation.map((item, index) => {
        return (
          <div
            key={index}
            className={`m-1 cursor-pointer ${selectedOption === item.title ? "bg-blue-500 text-white rounded-xl" : ""}`}
            onClick={() => {
              setSelectedOption(item.title);
            }}
          >
            <Link className="inline-flex w-ful p-4" href={item.url}>
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
