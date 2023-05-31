import React from "react";

function User(props) {
  const { item, index } = props;
  const { id, trangThai, ngayMua, tongTien, maNguoiMua, sanPham } = item;
  return (
    <div className={`item-container ${index % 2 === 0 ? "le" : "chan"}`}>
      <p>{id}</p>
      <p>{trangThai}</p>
      <p>{ngayMua}</p>
      <div
        className="SanPham-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {sanPham.map((item, index) => {
          return (
            <p style={{ display: "inline-block", border: "unset" }}>
              STT: {index} - Mã sản phẩm: {item} - Tên sản phẩm: sanPham1 -
              size: 38 - Màu sắc: đỏ - Số lượng: 2
            </p>
          );
        })}
      </div>
      <p>{tongTien}</p>
      <p>{maNguoiMua}</p>
    </div>
  );
}

export default User;
