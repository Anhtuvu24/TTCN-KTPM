import React, { useState } from "react";
import avatarSimple from "../../../avatarImg/avatarSimple.jpg";
import InputBase from "../../../inputBase/input";
import "./index.scss";
import moment from "moment/moment";
import axios from "axios";
import { instance } from "../../../axios/axios";

function Product(props) {
  const {
    onVisible,
    onVisibleAdd,
    visibleAdd,
    product,
    listTheLoai,
    addPD,
    updatePD,
    listDanhMuc,
  } = props;
  const [inputValue, setInputValue] = useState({
    tenSanPham: product.tenSanPham,
    giaBan: product.giaBan,
    nhaCungCap: product.nhaCungCap,
    xuatXu: product.xuatXu,
    kichCo: product.kichCo,
    trongLuong: product.trongLuong,
    mauSac: product.mauSac,
  });
  const [selectedOption, setSelectedOption] = useState(
    product.maTheLoai ? product.maTheLoai : listTheLoai[0].id
  );

  const attributesInput = {
    tenSanPham: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Tên sản phẩm",
      name: "tenSanPham",
      value: inputValue.tenSanPham,
      defaultValue: product.tenSanPham,
    },
    giaBan: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Giá bán",
      name: "giaBan",
      value: inputValue.giaBan,
      defaultValue: product.giaBan,
    },
    nhaCungCap: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Nhà cung cấp",
      name: "nhaCungCap",
      value: inputValue.nhaCungCap,
      defaultValue: product.nhaCungCap,
    },
    trongLuong: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Trọng lượng",
      name: "trongLuong",
      value: inputValue.trongLuong,
      defaultValue: product.trongLuong,
    },
    xuatXu: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Xuất xứ",
      name: "xuatXu",
      value: inputValue.xuatXu,
      defaultValue: product.xuatXu,
    },
    kichCo: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Kích thước",
      name: "kichCo",
      value: inputValue.kichCo,
      defaultValue: product.kichCo,
    },
    mauSac: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Màu sắc",
      name: "mauSac",
      value: inputValue.mauSac,
      defaultValue: product.mauSac,
    },
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataUpload, setDataUpload] = useState(null);

  function handleImageChange(event) {
    const file = event.target.files[0];
    setDataUpload(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  const onClickReselect = () => {
    setSelectedImage(null);
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

  const onUpdateInfor = () => {
    const formData = new FormData();
    formData.append("image", dataUpload);
    const data = {
      id: product.id,
      updateInforData: {
        ...inputValue,
        maTheLoai: selectedOption,
        imgSend: formData,
      },
    };
    updatePD(data);
  };

  const onClickThem = () => {
    const formData = new FormData();
    formData.append("image", dataUpload);
    const data = {
      imgSend: formData,
      tenAnh: dataUpload,
      tenSanPham: inputValue.tenSanPham,
      giaBan: inputValue.giaBan,
      nhaCungCap: inputValue.nhaCungCap,
      xuatXu: inputValue.xuatXu,
      kichCo: inputValue.kichCo,
      maTheLoai: selectedOption,
      trongLuong: inputValue.trongLuong,
      mauSac: inputValue.mauSac,
    };
    addPD(data);
  };

  const closeModal = () => {
    onVisible(false);
    onVisibleAdd(false);
  };

  const handleChangeComboBox = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div onClick={closeModal} className="model">
      <div className="containerUpdate" onClick={handleClick}>
        <>
          <div className="Profile-container">
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
            <label
              style={{
                width: "110px",
                display: "inline-block",
                marginLeft: "20px",
              }}
            >
              Mã thể loại:
            </label>
            <select
              style={{
                width: "300px",
                padding: "10px",
                border: "unset",
                borderRadius: "2px",
              }}
              className="comboDM"
              value={selectedOption}
              onChange={handleChangeComboBox}
            >
              {listDanhMuc.map((item) => {
                return (
                  <option
                    value={item.id}
                  >{`${item.id} - ${item.tenDanhMuc}`}</option>
                );
              })}
            </select>

            <div style={{ marginTop: "10px", display: "flex" }}>
              <label
                style={{
                  width: "110px",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                Chọn ảnh:
              </label>
              {selectedImage ? null : (
                <input type="file" onChange={handleImageChange} />
              )}
              {selectedImage && (
                <>
                  <img
                    style={{ width: "70px", marginRight: "5px" }}
                    src={selectedImage}
                    alt="Preview"
                  />
                  <button
                    style={{
                      marginRight: "5px",
                      border: "unset",
                      width: "100px",
                      height: "30px",
                      borderRadius: "5px",
                    }}
                    onClick={onClickReselect}
                  >
                    Reselect img
                  </button>
                </>
              )}
            </div>
            <div className="button-container">
              {visibleAdd ? (
                <button onClick={onClickThem}>Thêm mới</button>
              ) : (
                <button onClick={onUpdateInfor}>Cập nhật</button>
              )}
              <button onClick={closeModal}>hủy bỏ</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Product;
