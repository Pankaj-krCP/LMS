import React from "react";
import Meta from "@repo/ui/meta";
import ClientBody from "./_component/home/Body";

const page = () => {
  return (
    <div>
      <Meta
        title="DevHome"
        description="DevHome is a platform for code to boost their knowledge"
        keywords="Programming,MERN,Next,Express,Node,React,MongoDB,Turborepo"
      />
      <ClientBody />
    </div>
  );
};

export default page;
