import React from "react";
import { ClipLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex pt-60 lg:pt-0 items-center justify-center h-full">
      <ClipLoader color="lightblue" size={60} />
    </div>
  );
};

export default loading;
