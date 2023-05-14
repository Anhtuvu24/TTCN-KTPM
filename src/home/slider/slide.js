import React from "react";
import { Carousel } from "antd";
import banner1 from "../../banner1/bann1.3.jpg";
import banner2 from "../../banner1/banner1.1.png";
import banner3 from "../../banner1/banner1.2.jpg";
function Slide(props) {
  const arrImg = [banner1, banner2, banner3];
  return (
    <div className="slide-container">
      <Carousel autoplay dotPosition={"top"}>
        {arrImg.map((item, index) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return (
            <div style={{ width: "100%", height: "300px" }}>
              {<img src={item} style={{ width: "100%", height: "400px" }} />}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slide;
