"use client";

import React, { useState } from "react";
import { customShadow } from "../../../../_utils/constant";

const DiscussionForm: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleCommentSubmit}
        className={`flex flex-col max-w-md mx-auto mt-8 p-4 border dark:border-gray-600 rounded ${customShadow}`}
      >
        {" "}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          className="w-full p-2 border dark:border-gray-600 rounded mb-2 bg-inherit"
          placeholder="Add a comment..."
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForm;
