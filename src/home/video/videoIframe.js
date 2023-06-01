import React from "react";

import "./index.scss";

function VideoIFrame(props) {
  return (
    <div className="container-iframe">
      <h1>#MẸO PHÂN BIỆT ÁO BÓNG ĐÁ AUTHENTIC VÀ REPLICA - SAO CHO ĐÚNG</h1>
      <div className="video-container">
        <iframe
          width="1140"
          height="640"
          src="https://www.youtube.com/embed/7g_CJm8pKl8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoIFrame;
