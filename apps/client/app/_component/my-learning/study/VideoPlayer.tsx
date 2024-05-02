import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ lecture }: { lecture: any }) => {
  return (
    <div className="border p-2 border-blue-500">
      <h3 className="my-4 px-2 font-semibold">Lecture 1.1: {lecture?.title}</h3>
      <div className="px-2">
        <ReactPlayer url={lecture?.url} controls width="100%" height="400px" />
      </div>
    </div>
  );
};

export default VideoPlayer;
