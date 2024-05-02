import React from "react";

interface Props {
  module: number;
  topic: string;
}

const LectureRightPageTopic: React.FC<Props> = ({ module, topic }) => {
  return (
    <div>
      <h2 className="text-lg font-bold text-blue-400">
        Module {module}: {topic}
      </h2>
    </div>
  );
};

export default LectureRightPageTopic;
