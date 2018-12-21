import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const renderedVideoList = props.videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div class="ui relaxed divided list">{renderedVideoList}</div>;
};

export default VideoList;
