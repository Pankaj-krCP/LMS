import React from "react";
import Heading from "@repo/ui/heading";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <div>
      <Heading
        title="CodingSync"
        description="CodingSync is a platform for code to boost their knowledge"
        keywords="Programming,MERN,Next,Express,Node,React,MongoDB,Turborepo"
      />
      <h1>Hello World</h1>
    </div>
  );
};

export default page;
