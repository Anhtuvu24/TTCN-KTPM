/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Remove from "../iconBase/remove";
import Add from "../iconBase/add";

function ProductItem(props) {
  const {
    src,
    name,
    id,
    color,
    size,
    price,
    number,
    onAdd,
    onRemoveOne,
    removeProduct,
  } = props;
  debugger;
  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const onAddProduct = () => {
    const item = {
      id: id,
      name: name,
      src: src,
      color: color,
      number: 1,
      size: size,
      price: price,
    };
    onAdd(item);
  };

  const onRemoveOneProduct = () => {
    const idRemoveOne = id;
    onRemoveOne(idRemoveOne);
  };

  const onRemoveProduct = (item) => {
    const idDelete = id;
    removeProduct(idDelete);
  };

  return (
    <>
      {number ? (
        <div className="item">
          <div className="review">
            <img src={src} />
            <div className="infor">
              <h2>{name}</h2>
              <p>Mã sản phẩm: {id}</p>
              <p>Màu sắc: {color}</p>
              <p>Kích cỡ: {size}</p>
              <p className="delete">Xóa</p>
            </div>
          </div>
          <div className="price">
            <p>{formatCash(`${price}`)}đ</p>
          </div>
          <div className="number">
            <Remove onClick={onRemoveOneProduct} />
            <p>{number}</p>
            <Add onClick={onAddProduct} />
          </div>
          <div className="total-price">{formatCash(`${number * price}`)}đ</div>
        </div>
      ) : null}
    </>
  );
}

export default ProductItem;
