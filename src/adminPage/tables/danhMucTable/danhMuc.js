import React, { useState } from "react";
import avatarSimple from "../../../avatarImg/avatarSimple.jpg";
import InputBase from "../../../inputBase/input";
import "./index.scss";
import moment from "moment/moment";

function DanhMuc(props) {
  const { onVisible, onVisibleAdd, visibleAdd, danhMuc, addDM, updateDM } =
    props;
  const [inputValue, setInputValue] = useState({
    tenDanhMuc: danhMuc.tenDanhMuc,
  });

  const attributesInput = {
    tenDanhMuc: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Tên danh mục",
      name: "tenDanhMuc",
      value: inputValue.tenDanhMuc,
      defaultValue: danhMuc.tenDanhMuc,
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

  const onUpdateInfor = () => {
    const data = {
      id: danhMuc.id,
      updateInforData: {
        ...inputValue,
      },
    };
    updateDM(data);
  };

  const onClickThem = () => {
    addDM(inputValue.tenDanhMuc);
  };

  const closeModal = () => {
    onVisible(false);
    onVisibleAdd(false);
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

export default DanhMuc;
