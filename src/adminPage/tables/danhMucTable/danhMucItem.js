import React from "react";

function DanhMuc(props) {
  const { item, index } = props;
  const { id, tenDanhMuc } = item;
  return (
    <div className={`item-container ${index % 2 === 0 ? "le" : "chan"}`}>
      <p>{id}</p>
      <p>{tenDanhMuc}</p>
    </div>
  );
}

export default DanhMuc;
