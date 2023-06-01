import React, { useEffect, useState } from "react";
import AddCart from "../../iconBase/addCart";

function ItemProduct(props) {
  const {
    src,
    name,
    price,
    id,
    onVisibleByFast,
    setIdProductDetail,
    color,
    size,
    tenAnh,
  } = props;
  const [imageUrl, setImageUrl] = useState("");
  function formatCash(str) {
    return str
      .split("")
      .reverse()
      .reduce((prev, next, index) => {
        return (index % 3 ? next : next + ",") + prev;
      });
  }
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
  const openProductDetail = (item) => {
    setIdProductDetail(item);
  };
  const stopEvent = (e) => {
    e.stopPropagation();
  };
  const onOpenModal = (e) => {
    const item = {
      id: id,
      name: name,
      price: price,
      src: src,
      color: color,
      size: size,
      tenAnh: tenAnh,
    };
    onVisibleByFast(item);
  };
  return (
    <div onClick={() => openProductDetail(id)} className="item-container">
      <img src={imageUrl} />
      <div className="infor-cart">
        <div className="infor">
          <p className="name">{name}</p>
          <p className="price">{formatCash(`${price}`)}đ</p>
        </div>
        <div onClick={stopEvent} className="cart">
          <AddCart onClick={onOpenModal} />
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
