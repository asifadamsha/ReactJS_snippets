import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  const videoThumbnail = video.snippet.thumbnails.medium.url;
  const videoId = video.id.videoId;
  const videoInfo = video.snippet.description;
  const videoTitle = video.snippet.title;

  return (
    <div class="video-item item">
      <img class="ui image" src={videoThumbnail} />
      <div class="content">
        <div class="header">{videoTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
