import React from "react";
import Meta from "@repo/ui/meta";
import ClientHeader from "./_component/Header/ClientHeader";

const page = () => {
  return (
    <div>
      <Meta
        title="CodingSync"
        description="CodingSync is a platform for code to boost their knowledge"
        keywords="Programming,MERN,Next,Express,Node,React,MongoDB,Turborepo"
      />
      <ClientHeader />
    </div>
  );
};

export default page;
