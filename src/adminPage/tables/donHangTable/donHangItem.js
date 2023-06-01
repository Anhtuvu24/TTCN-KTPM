import React from "react";
import moment from "moment/moment";

function User(props) {
  const { item, index } = props;
  const { diaChi, maDonHang, trangThai, ngayMua, nguoiMua, listSP = [] } = item;
  const totalPrice = listSP.reduce(
    (sum, item) => sum + item.giaBan * item.soLuong,
    0
  );
  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }
  return (
    <div className={`item-container ${index % 2 === 0 ? "le" : "chan"}`}>
      <p>{maDonHang}</p>
      <p>{trangThai}</p>
      <p>{moment(ngayMua).format("DD/MM/yyyy")}</p>
      <div
        className="SanPham-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {listSP.map((item, index) => {
          return (
            <p style={{ display: "inline-block", border: "unset" }}>
              STT: {index + 1} - Mã sản phẩm: {item.maSanPham} - Tên sản phẩm:{" "}
              {item.tenSanPham} - size: {item.kichCo} - Màu sắc: {item.mauSac} -
              Số lượng: {item.soLuong}
            </p>
          );
        })}
      </div>
      <p>{diaChi}</p>
      <p>{formatCash(`${totalPrice}`)}đ</p>
      <p>{nguoiMua}</p>
    </div>
  );
}

export default User;
