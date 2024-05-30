import React from "react";
import DiscussionForm from "../../../../../_component/my-learning/study/discussion/DiscussionForm";
import UserDiscussion from "../../../../../_component/my-learning/study/discussion/UserDiscussion";
import { underlineBlueCSS } from "../../../../../_utils/constant";

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="my-4">
        <h2 className={`${underlineBlueCSS} text-center`}>Create new thread</h2>
      </div>
      <DiscussionForm />
      <hr className="dark:border-gray-600 mt-4" />
      <div className="my-4">
        <h2 className={`${underlineBlueCSS} text-center`}>All threads</h2>
      </div>
      <UserDiscussion />
    </div>
  );
};

export default page;
