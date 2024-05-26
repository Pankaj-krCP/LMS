"use client";

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { customShadow } from "../../../../_utils/constant";

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

interface ThreadProps {
  thread: IThread;
}

const Thread: React.FC<ThreadProps> = ({ thread }) => {
  const [replies, setReplies] = useState<Reply[]>(thread.replies);
  const [newReply, setNewReply] = useState<string>("");
  const [openReply, setOpenReply] = useState<Boolean>(false);

  const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReply.trim()) {
      const reply: Reply = {
        id: replies.length + 1,
        content: newReply,
      };
      setReplies([...replies, reply]);
      setNewReply("");
    }
  };

  return (
    <div
      className={`mb-4 p-4 border dark:border-gray-600 rounded-lg ${customShadow}`}
    >
      <div className="flex items-center gap-2">
        <FaUser size={20} className="mb-2" />
        <h2 className="text-xl font-semibold mb-2">{thread.title}</h2>
      </div>
      <p className="mb-4">{thread.content}</p>
      <div
        className="cursor-pointer border border-gray-600 rounded-lg font-semibold py-1 px-2 text-center mb-2"
        onClick={() => {
          setOpenReply(!openReply);
        }}
      >
        <span>{openReply ? "Close" : "Show"} Conversation</span>
      </div>

      {openReply && (
        <div>
          <form onSubmit={handleReplySubmit} className="mb-4">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              rows={2}
              className="w-full p-2 border dark:border-gray-600 rounded mb-2 bg-inherit"
              placeholder="Add a reply..."
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Reply
            </button>
          </form>
          <div>
            {replies.map((reply) => (
              <div key={reply.id} className="flex item-center gap-2 mb-2 p-2">
                <FaUser className="mt-1" />
                <p>{reply.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Thread;
