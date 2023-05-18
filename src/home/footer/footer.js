import React, { useState } from "react";
import Phone from "../../iconBase/phone";
import Mail from "../../iconBase/mail";
import HomeIcon from "../../iconBase/homeIcon";

// Style
import "./index.scss";

function Footer(props) {
  return (
    <>
      <div className="footer-container">
        <div className="left-footer">
          <p className="address">
            <HomeIcon />
            <b>Trụ sở: </b> Nhổn, Đại học Công nghiệp Hà Nội, Bắc Từ Liêm, Hà
            Nội.
          </p>

          <p
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="Contact"
          >
            <Phone />
            0354394229
          </p>

          <p className="email">
            <Mail /> seasport.store@gmail.com
          </p>
        </div>
        <div className="mid-footer">
          <div className="item">
            <h2>
              <b>Dịch vụ khách hàng</b>
            </h2>
            <div className="menu">
              <p>Giới thiệu</p>
              <p>Chính sách đổi trả</p>
              <p>Chính sách bảo mật</p>
              <p>Điều khoản dịch vụ</p>
              <p>Hướng dẫn thanh toán</p>
            </div>
          </div>
          <div className="item">
            <h2>
              <b>Nhóm sản phẩm</b>
            </h2>
            <div className="menu">
              <p>Sản phẩm khuyến mãi</p>
              <p>Sản phẩm nổi bật</p>
              <p>Tất cả sản phẩm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">Copy right by group 1</div>
    </>
  );
}

export default Footer;
