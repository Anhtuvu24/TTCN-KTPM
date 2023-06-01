import React, { useState } from "react";
import InputBase from "../inputBase/input";
import "./index.scss";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
import { clearCart } from "../features/slice/cart";

function DatHang(props) {
  const {
    onVisibleDatHang,
    userLogin,
    totalPrice,
    cart,
    totalNumber,
    addDH,
    check,
    onVisibleModalCart,
  } = props;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    diaChi: userLogin.address,
  });

  const attributesInput = {
    tenDadiaChinhMuc: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Địa chỉ đặt hàng",
      name: "diaChi",
      value: inputValue.diaChi,
      defaultValue: userLogin.address,
    },
  };
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const onChange = (e) => {
    setInputValue((inputValue) => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickThem = () => {
    const data = {
      cart: cart,
      maNguoiDung: userLogin.id,
      diaChi: inputValue.diaChi,
      trangThai: "Dang giao",
    };
    addDH(data);
    setTimeout(() => {
      dispatch(clearCart());
      onVisibleDatHang(false);
      onVisibleModalCart();
    }, 1000);
  };

  const closeModal = () => {
    // onVisible(false);
    onVisibleDatHang(false);
  };

  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }

  return (
    <div onClick={closeModal} className="model">
      <div className="containerUpdate" onClick={handleClick}>
        <>
          <div className="Profile-container">
            <div className="Infor">
              <p>Tên khách hàng: {userLogin.fullName}</p>
              <p>Số điện thoại: {userLogin.phone}</p>
              <p>Tổng số lượng sản phẩm: {totalNumber}</p>
            </div>
            <div className="profile-input">
              {Object.keys(attributesInput).map((key) => {
                return (
                  <InputBase
                    attributes={attributesInput[key]}
                    onChange={onChange}
                  />
                );
              })}
            </div>
            <h3>Tổng tiền: {formatCash(`${totalPrice}`)}đ</h3>
            <div className="button-container">
              <button onClick={onClickThem}>Đặt hàng</button>
              <button onClick={closeModal}>hủy bỏ</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default DatHang;
