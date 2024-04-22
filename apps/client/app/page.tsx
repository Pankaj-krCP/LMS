import React from "react";
import Meta from "@repo/ui/meta";
import ClientHeader from "./_component/home/ClientHeader";
import ClientBody from "./_component/home/ClientBody";
// import ClientFooter from "./_component/home/ClientFooter";

const page = () => {
  return (
    <div>
      <Meta
        title="CodingSync"
        description="CodingSync is a platform for code to boost their knowledge"
        keywords="Programming,MERN,Next,Express,Node,React,MongoDB,Turborepo"
      />
      <ClientHeader />
      <ClientBody />
      {/* <ClientFooter /> */}
    </div>
  );
};

export default page;
