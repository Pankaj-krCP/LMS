import React from "react";
import DiscussionForm from "../../../../../_component/my-learning/study/discussion/DiscussionForm";
import UserDiscussion from "../../../../../_component/my-learning/study/discussion/UserDiscussion";

const page = () => {
  return (
    <div>
      <DiscussionForm />
      <hr className="dark:border-gray-600" />
      <UserDiscussion />
    </div>
  );
};

export default page;
