import React from "react";
import Meta from "@repo/ui/meta";
import AdminBody from "./_component/home/Body";

const page = () => {
  return (
    <div>
      <Meta
        title="DevHome"
        description="DevHome is a platform for code to boost their knowledge"
        keywords="Programming,MERN,Next,Express,Node,React,MongoDB,Turborepo"
      />
      <AdminBody />
    </div>
  );
};

export default page;
