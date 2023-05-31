import React from "react";

function Product(props) {
  const { item, index } = props;
  const {
    id,
    tenSanPham,
    maTheLoai,
    hinhAnh,
    giaBan,
    nhaCungCap,
    xuatXu,
    trongLuong,
    kichCo,
    mauSac,
  } = item;
  return (
    <div className={`item-container ${index % 2 === 0 ? "le" : "chan"}`}>
      <p>{id}</p>
      <p>{tenSanPham}</p>
      <p>{maTheLoai}</p>
      <div>
        <img src={hinhAnh} />
      </div>
      <p>{giaBan}</p>
      <p>{nhaCungCap}</p>
      <p>{trongLuong}</p>
      <p>{xuatXu}</p>
      <p>{kichCo}</p>
      <p>{mauSac}</p>
    </div>
  );
}

export default Product;
