/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState, useEffect } from "react";
// import cart from "../cart";
import Remove from "../iconBase/remove";
import { message } from "antd";

import Add from "../iconBase/add";
import {
  addProduct,
  removeOneProduct,
  removeProduct,
} from "../features/slice/cart";
import { useDispatch } from "react-redux";
import "./index.scss";
import ProductItem from "./itemProduct";
import DatHangContainer from "./datHangContainer";
import { clearDonHangMessage } from "../features/slice/donHang";

function Cart(props) {
  const { userLogin, onVisibleModalCart, cart, messageDHStatus } = props;
  const [visibleDatHang, onVisibleDatHang] = useState(false);
  const [messageApiDevelop, contextHolder] = message.useMessage();
  const alertMessage = (messageStatus) => {
    if (messageStatus.type === "error")
      messageApiDevelop.error(messageStatus.message);
    else if (messageStatus.type === "success") {
      messageApiDevelop.success(messageStatus.message);
    }
  };
  useEffect(() => {
    if (messageDHStatus) {
      alertMessage(messageDHStatus);
    }
    setTimeout(() => {
      dispatch(clearDonHangMessage());
    }, 1000);
  }, [messageDHStatus]);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.number,
    0
  );
  const totalNumber = cart.reduce((sum, item) => sum + item.number, 0);
  const onCloseModal = () => {
    onVisibleModalCart();
  };

  const onDatHang = () => {
    onVisibleDatHang(true);
  };

  const onAdd = (item) => {
    dispatch(addProduct(item));
  };

  const onRemoveOne = (item) => {
    dispatch(removeOneProduct(item));
  };

  const remove = (item) => {
    dispatch(removeProduct(item));
  };

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {contextHolder}
      {visibleDatHang ? (
        <DatHangContainer
          userLogin={userLogin}
          totalPrice={totalPrice}
          cart={cart}
          onVisibleDatHang={onVisibleDatHang}
          totalNumber={totalNumber}
          onVisibleModalCart={onVisibleModalCart}
        />
      ) : (
        <div className="modal-cart" onClick={onCloseModal}>
          <div onClick={handleClick} className="container">
            <h1>GIỎ HÀNG</h1>
            <div className="title-column">
              <p>Thông tin sản phẩm</p>
              <p>Đơn giá</p>
              <p>Số lượng</p>
              <p>Tổng giá</p>
            </div>
            {cart.length ? (
              <>
                <div className="items">
                  {cart.map((item, index) => {
                    return (
                      <ProductItem
                        src={item.src}
                        name={item.name}
                        id={item.id}
                        color={item.color}
                        size={item.size}
                        price={item.price}
                        tenAnh={item.tenAnh}
                        number={item.number}
                        onAdd={onAdd}
                        onRemoveOne={onRemoveOne}
                        removeProduct={remove}
                      />
                    );
                  })}
                </div>
                <div className="final-price">
                  <p>Tổng tiền: </p>
                  <p className="price">{formatCash(`${totalPrice}`)}đ</p>
                </div>
              </>
            ) : (
              <div className="empty-message">
                Chưa có sản phẩm nào trong giỏ hàng
              </div>
            )}
            <div className="btn-container">
              <button className="continue-buy" onClick={onCloseModal}>
                Tiếp tục mua hàng
              </button>
              {cart.length ? (
                <button className="buy" onClick={onDatHang}>
                  Đặt hàng
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
