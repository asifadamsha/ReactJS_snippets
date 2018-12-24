import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const videoThumbnail = video.snippet.thumbnails.medium.url;
  const videoInfo = video.snippet.description;
  const videoTitle = video.snippet.title;

  return (
    <div
      className="video-item item"
      onClick={event => {
        onVideoSelect(video);
      }}
    >
      <img alt={videoInfo} className="ui image" src={videoThumbnail} />
      <div className="content">
        <div className="header">{videoTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
