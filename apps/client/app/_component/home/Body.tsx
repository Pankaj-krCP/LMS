import React from "react";
import FeaturedCourse from "./FeaturedCourse";
import NavigateButton from "./NavigateButton";
import Banner from "./Banner";

const ClientBody = () => {
  return (
    <div className="pt-[80px] pb-8">
      <Banner />
      <FeaturedCourse />
      <NavigateButton />
    </div>
  );
};

export default ClientBody;
