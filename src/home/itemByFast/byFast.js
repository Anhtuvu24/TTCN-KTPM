import React, { useState } from "react";
import { addProduct } from "../../features/slice/cart";
import { useDispatch } from "react-redux";
import "./index.scss";
import { Carousel } from "antd";
import banner1 from "../../banner1/bann1.3.jpg";
import banner2 from "../../banner1/banner1.1.png";
import banner3 from "../../banner1/banner1.2.jpg";
import CloseIcon from "../../iconBase/close";

function ByFastItem(props) {
  const { onVisibleByFast, id, name, price, src } = props;
  const arrImg = [banner1, banner2, banner3];
  const color = ["Đỏ", "Trắng", "Xanh", "Đen"];
  const size = ["S", "L", "XL", "XXL"];
  const [selectColor, setSelectColor] = useState("Đỏ");
  const [selectSize, setSelectSize] = useState("S");
  const dispatch = useDispatch();
  const onSelectColor = (value) => {
    setSelectColor(value);
  };
  const onSelectSize = (value) => {
    setSelectSize(value);
  };
  const onClose = () => {
    onVisibleByFast();
  };
  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }
  const onClick = (e) => {
    e.stopPropagation();
  };
  const onAdd = () => {
    const item = {
      id: id,
      name: name,
      src: src,
      number: 1,
      color: selectColor,
      size: selectSize,
      price: price,
    };
    dispatch(addProduct(item));
    onClose();
  };
  return (
    <div onClick={onClose} className="modal-by-fast">
      <div onClick={onClick} className="container">
        <div className="slide-img">
          <Carousel autoplay dotPosition={"bottom"}>
            {arrImg.map((item, index) => {
              // eslint-disable-next-line jsx-a11y/alt-text
              return (
                <div style={{ width: "100%", height: "210px" }}>
                  {
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                      src={item}
                      style={{ width: "354px", height: "210px" }}
                    />
                  }
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="infor-order">
          <h1>{name}</h1>
          <p>Mã sản phẩm: {id}</p>
          <p>{formatCash(`${price}đ`)}</p>
          <h4>Màu sắc</h4>
          <div className="colors">
            {color.map((item) => {
              return (
                <div
                  onClick={() => onSelectColor(item)}
                  className={`item ${
                    selectColor === item ? "select-item" : ""
                  }`}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <h4>Kích thước</h4>
          <div className="sizes">
            {size.map((item) => {
              return (
                <div
                  onClick={() => onSelectSize(item)}
                  className={`item ${selectSize === item ? "select-item" : ""}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <button onClick={onAdd} className="add-to-cart">
            Thêm vào giỏ
          </button>
          <p>Xem chi tiết</p>
        </div>
        <div onClick={onClose} className="close-modal">
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}

export default ByFastItem;
