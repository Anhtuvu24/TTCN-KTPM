import React, { useState, useEffect } from "react";
import AddCart from "../../iconBase/addCart";

import "./index.scss";

function ListItem(props) {
  const { list, title, type, backgroundColor } = props;
  const [itemsShow, setItemsShow] = useState(4);
  const newItem = list.filter((item) => item.type === type);
  const showMore = () => {
    setItemsShow(itemsShow + 4);
  };

  const onClick = () => {
    console.log("test");
  };

  const onClickCart = (e) => {
    e.stopPropagation();
    console.log("Check");
  };

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  return newItem.length ? (
    <div className="container" onClick={onClick}>
      <h1>{title}</h1>
      <div className="list-item-container">
        {newItem.map((item, index) => {
          if (index < itemsShow) {
            return (
              <div className="item-container">
                <img src={item.src} />
                <div className="infor-cart">
                  <div className="infor">
                    <p className="name">{item.name.toUpperCase()}</p>
                    <p className="price">{formatCash(`${item.price}`)}đ</p>
                  </div>
                  <div className="cart">
                    <AddCart onClick={onClickCart} />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      {newItem.length >= itemsShow && (
        <button onClick={showMore} className="show-more">
          Xem thêm
        </button>
      )}
    </div>
  ) : null;
}

export default ListItem;
