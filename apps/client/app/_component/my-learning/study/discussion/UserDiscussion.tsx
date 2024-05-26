"use client";

import React, { useState } from "react";
import ThreadList from "./ThreadList";

interface Reply {
  id: number;
  content: string;
}

interface Thread {
  id: number;
  title: string;
  content: string;
  replies: Reply[];
}

const initialThreads: Thread[] = [
  {
    id: 1,
    title: "First Thread",
    content: "This is the first thread content.",
    replies: [
      { id: 1, content: "First reply to first thread." },
      { id: 2, content: "Second reply to first thread." },
    ],
  },
  {
    id: 2,
    title: "Second Thread",
    content: "This is the second thread content.",
    replies: [{ id: 1, content: "First reply to second thread." }],
  },
];

const UserDiscussion: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All threads</h1>
      <ThreadList threads={threads} />
    </div>
  );
};

export default UserDiscussion;
