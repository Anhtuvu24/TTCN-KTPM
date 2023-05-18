/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import cart from "../cart";
import Remove from "../iconBase/remove";
import Add from "../iconBase/add";
import "./index.scss";

function Cart(props) {
  const { userLogin, onVisibleModalCart } = props;
  //   const [totalPrice, setTotalPrice] = useState(0);
  const cartUser = cart.filter((item) => item.id === userLogin.id);
  const listProduct = cartUser[0].items;
  const ref = useRef();

  let totalPrice = 0;
  for (let i = 0; i < listProduct.length; i++) {
    totalPrice += listProduct[i].price * listProduct[i].number;
  }

  const onCloseModal = () => {
    onVisibleModalCart();
  };

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const onAdd = () => {
    console.log("Check");
    ref.current.value += 1;
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-cart" onClick={onCloseModal}>
      <div onClick={handleClick} className="container">
        <h1>GIỎ HÀNG</h1>
        <div className="title-column">
          <p>Thông tin sản phẩm</p>
          <p>Đơn giá</p>
          <p>Số lượng</p>
          <p>Tổng giá</p>
        </div>
        <div className="items">
          {listProduct.map((item, index) => {
            return (
              <div className="item">
                <div className="review">
                  <img src={item.src} />
                  <div className="infor">
                    <h2>{item.name}</h2>
                    <p>Mã sản phẩm: {item.ID}</p>
                    <p>Màu sắc: {item.color}</p>
                    <p>Kích cỡ: {item.size}</p>
                  </div>
                </div>
                <div className="price">
                  <p>{formatCash(`${item.price}`)}đ</p>
                </div>
                <div className="number">
                  <Remove />
                  <p ref={ref}>{item.number}</p>
                  <Add onClick={onAdd} />
                </div>
                <div className="total-price">
                  {formatCash(`${item.number * item.price}`)}đ
                </div>
              </div>
            );
          })}
        </div>
        <div className="final-price">
          <p>Tổng tiền: </p>
          <p className="price">{formatCash(`${totalPrice}`)}đ</p>
        </div>
        <div className="btn-container">
          <button className="continue-buy" onClick={onCloseModal}>
            Tiếp tục mua hàng
          </button>
          <button className="buy">Đặt hàng</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
