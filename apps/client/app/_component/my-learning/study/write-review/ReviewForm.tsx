"use client";

import React, { useState } from "react";

const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState<number | null>(0);
  const [review, setReview] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Review:", review);
    setRating(0);
    setReview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md mx-auto mt-8 p-4 border dark:border-gray-600 rounded shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Rating:</label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`w-8 h-8 text-xl ${star <= (rating || 0) ? "text-yellow-500" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="review" className="block text-sm font-medium mb-2">
          Your Review:
        </label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border dark:border-gray-600 bg-inherit rounded"
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
