import React from "react";

import "./index.scss";

function VideoIFrame(props) {
  return (
    <div className="container-iframe">
      <h1>Title</h1>
      <h2>Name</h2>
      <div className="video-container">
        <iframe
          width="1140"
          height="640"
          src="https://www.youtube.com/embed/Fae0axImNn0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoIFrame;
