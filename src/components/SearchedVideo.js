import React from "react";
import "../css/SearchedVideo.css";

function SearchedVideo({
  image,
  title,
  views,
  puplished,
  channelImage,
  channelName,
}) {
  return (
    <div className="SearchedVideo">
      <div className="video-card">
        <img src={image} className="video-image" />
        <div className="video-info">
          <h3 className="video-title">{title}</h3>
          <h4 className="video-views-puplished">
            {views} views . {puplished} ago
          </h4>
          <div className="channel-info">
            <img src={channelImage} className="channel-image" />
            <h4 className="channel-name">{channelName}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchedVideo;
