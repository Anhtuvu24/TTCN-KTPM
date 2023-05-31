import React from "react";

function TheLoai(props) {
  const { item, index } = props;
  const { id, tenTheLoai, maDanhMuc } = item;
  return (
    <div className={`item-container ${index % 2 === 0 ? "le" : "chan"}`}>
      <p>{id}</p>
      <p>{tenTheLoai}</p>
      <p>{maDanhMuc}</p>
    </div>
  );
}

export default TheLoai;
