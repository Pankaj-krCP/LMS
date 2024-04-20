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
      <div className="text-3xl font-bold underline">Hi</div>
    </div>
  );
};

export default page;
