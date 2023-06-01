import React from "react";
import "../index.scss";

function ItemMenu(props) {
  const { name, itemSelect, type, onSelectItem, lastUpdate } = props;
  const onSelect = () => {
    onSelectItem(type, name);
  };
  return (
    <div
      onClick={onSelect}
      className={`item ${itemSelect === type ? "select" : ""}`}
    >
      <h3>{name}</h3>
      {/* <p>Lần cuối chỉnh sửa</p> */}
    </div>
  );
}

export default ItemMenu;
