/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../css/Video.css";

function Video({ image, title, channelName, channelImage, views, published }) {
  return (
    <div className="video-card">
      <img src={image} className="video-thumbnail" alt="Video-thumbnail" />
      <div className="video-info">
        <img
          className="video-channel-image"
          alt="Image of the video's channel"
          src={channelImage}
        />
        <div className="video-text">
          <h5 className="video-title">{title}</h5>
          <h6 className="channel-name">{channelName}</h6>
          <h6 className="video-views-time">
            {views} views . {published} ago
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Video;
