/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
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
    tenAnh,
    number,
    onAdd,
    onRemoveOne,
    removeProduct,
  } = props;
  const [imageUrl, setImageUrl] = useState("");
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
      tenAnh: tenAnh,
    };
    onAdd(item);
  };

  const onRemoveOneProduct = () => {
    const item = {
      id: id,
      color: color,
      size: size,
    };
    onRemoveOne(item);
  };

  const onRemoveProduct = () => {
    const idDelete = id;
    removeProduct(idDelete);
  };

  return (
    <>
      {number ? (
        <div className="item">
          <div className="review">
            <img src={imageUrl} />
            <div className="infor">
              <h2>{name}</h2>
              <p>Mã sản phẩm: {id}</p>
              <p>Màu sắc: {color}</p>
              <p>Kích cỡ: {size}</p>
              <p onClick={onRemoveProduct} className="delete">
                Xóa
              </p>
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
