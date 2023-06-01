import React, { useEffect, useState } from "react";
import item1 from "../../../itemImg/item1.jpg";
import { instance } from "../../../axios/axios";
import axios from "axios";

function Product(props) {
  const { item, index } = props;
  const {
    id,
    tenSanPham,
    maTheLoai,
    tenAnh,
    giaBan,
    nhaCungCap,
    xuatXu,
    trongLuong,
    kichCo,
    mauSac,
  } = item;
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
  return (
    <div className={`item-container ${index % 2 === 0 ? "le" : "chan"}`}>
      <p>{id}</p>
      <p>{tenSanPham}</p>
      <p>{maTheLoai}</p>
      <div>
        <img src={imageUrl} />
      </div>
      <p>{giaBan}</p>
      <p>{nhaCungCap}</p>
      <p>{trongLuong}</p>
      <p>{xuatXu}</p>
      <p>{kichCo}</p>
      <p>{mauSac}</p>
    </div>
  );
}

export default Product;
