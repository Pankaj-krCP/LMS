import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <div className="p-2">
      <ReactPlayer url={url} controls width="100%" height="450px" />
    </div>
  );
};

export default VideoPlayer;
