"use client";

import React, { useState } from "react";

const Discussion: React.FC = () => {
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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create new thread</h1>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded mb-2"
          placeholder="Add a comment..."
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
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

export default Discussion;
