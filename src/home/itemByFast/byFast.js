import React, { useState, useEffect } from "react";
import { addProduct } from "../../features/slice/cart";
import { useDispatch } from "react-redux";
import "./index.scss";
import CloseIcon from "../../iconBase/close";

function ByFastItem(props) {
  const { onVisibleByFast, id, name, price, src, color, size, tenAnh } = props;
  const colors = color.split(", ");
  const sizes = size.split(", ");
  const [selectColor, setSelectColor] = useState(colors[0]);
  const [selectSize, setSelectSize] = useState(sizes[0]);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:8088/api/files/${tenAnh}`
        );
        if (response.ok) {
          const imageBlob = await response.blob();
          const imageUrl = URL.createObjectURL(imageBlob);
          setImageUrl(imageUrl);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);
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
      tenAnh: tenAnh,
    };
    dispatch(addProduct(item));
    onClose();
  };
  return (
    <div onClick={onClose} className="modal-by-fast">
      <div onClick={onClick} className="container">
        <div className="slide-img">
          <div style={{ width: "100%", height: "210px" }}>
            {
              // eslint-disable-next-line jsx-a11y/alt-text
              <img src={imageUrl} style={{ width: "354px", height: "210px" }} />
            }
          </div>
        </div>
        <div className="infor-order">
          <h1>{name}</h1>
          <p>Mã sản phẩm: {id}</p>
          <p>{formatCash(`${price}đ`)}</p>
          <h4>Màu sắc</h4>
          <div className="colors">
            {colors.map((item) => {
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
            {sizes.map((item) => {
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
