"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Iitem {
  title: string;
  url: string;
}

const navigation = [
  { title: "Dashboard", url: "/my-learning" },
  { title: "Study", url: "/my-learning/study" },
  { title: "Discussion", url: "/my-learning/discussion" },
  { title: "certificate", url: "/my-learning/certificate" },
];

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Dashboard");
  const pathname = usePathname();
  const router = useRouter();
  const paths = pathname.split("/");

  const navigationHandler = (item: Iitem) => {
    setSelectedOption(item.title);
    router.push(item.url);
  };

  return (
    <div
      className={`${paths[2] === "study" && paths.length > 3 ? "hidden" : ""}`}
    >
      {navigation.map((item, index) => {
        return (
          <div
            key={index}
            className={`m-1 cursor-pointer ${selectedOption === item.title ? "bg-blue-500 text-white rounded-xl" : "hover:bg-blue-300 hover:text-white hover:rounded-xl"}`}
            onClick={() => {
              navigationHandler(item);
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
