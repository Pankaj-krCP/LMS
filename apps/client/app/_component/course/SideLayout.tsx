import React from "react";
import SideLayoutOption from "./SideLayoutOption";

type Option = {
  title: string;
  options: string[];
};

const options: Option[] = [
  {
    title: "Web Development",
    options: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Mobile Development",
    options: ["Android", "iOS", "React Native"],
  },
  {
    title: "Data Science",
    options: ["Python", "R", "SQL"],
  },
  {
    title: "DevOps",
    options: ["Docker", "Kubernetes", "Jenkins"],
  },
];

const SideLayout: React.FC = () => {
  return options.map((item, index) => {
    return (
      <SideLayoutOption key={index} title={item.title} options={item.options} />
    );
  });
};

export default SideLayout;
