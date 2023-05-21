import React from "react";
import AddCart from "../../iconBase/addCart";

function ItemProduct(props) {
  const { src, name, price, onAddProduct, id } = props;
  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }
  const onClickCart = (e) => {
    e.stopPropagation();
    const item = {
      id: id,
      name: name,
      src: src,
      number: 1,
      size: 38,
      price: price,
    };
    debugger;
    onAddProduct(item);
  };
  return (
    <div className="item-container">
      <img src={src} />
      <div className="infor-cart">
        <div className="infor">
          <p className="name">{name.toUpperCase()}</p>
          <p className="price">{formatCash(`${price}`)}đ</p>
        </div>
        <div className="cart">
          <AddCart onClick={onClickCart} />
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
