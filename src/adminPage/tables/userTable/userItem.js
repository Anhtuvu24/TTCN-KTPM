import React from "react";
import moment from "moment/moment";

function User(props) {
  const { item, index } = props;
  const {
    id,
    tenDangNhap,
    matKhau,
    hoTen,
    soDienThoai,
    gioiTinh,
    ngaySinh,
    diaChi,
  } = item;
  return (
    <>
      <div className={`item-container ${index % 2 === 0 ? "le" : "chan"}`}>
        <p>{id}</p>
        <p>{tenDangNhap}</p>
        <p>{matKhau}</p>
        <p>{hoTen}</p>
        <p>{soDienThoai}</p>
        <p>{gioiTinh === 0 ? "Nam" : "Nữ"}</p>
        <p>{moment(ngaySinh).format("DD/MM/yyyy")}</p>
        <p>{diaChi}</p>
      </div>
    </>
  );
}

export default User;
