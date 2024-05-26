import React from "react";
import Thread from "./Thread";

interface Reply {
  id: number;
  content: string;
}

interface IThread {
  id: number;
  title: string;
  content: string;
  replies: Reply[];
}

interface ThreadListProps {
  threads: IThread[];
}

const ThreadList: React.FC<ThreadListProps> = ({ threads }) => {
  return (
    <div>
      {threads.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
    </div>
  );
};

export default ThreadList;
