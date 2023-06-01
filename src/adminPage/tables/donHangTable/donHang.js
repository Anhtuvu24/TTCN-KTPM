import React, { useState } from "react";
import avatarSimple from "../../../avatarImg/avatarSimple.jpg";
import InputBase from "../../../inputBase/input";
import "./index.scss";
import moment from "moment/moment";

function DonHang(props) {
  const { onVisible, donHangSelect, updateDH } = props;
  const [inputValue, setInputValue] = useState({
    trangThai: donHangSelect.trangThai,
  });
  const attributesInput = {
    trangThai: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Trạng thái đơn hàng",
      name: "trangThai",
      value: inputValue.trangThai,
      defaultValue: donHangSelect.trangThai,
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
    console.log(donHangSelect);
    const data = {
      updateInforData: {
        trangThai: inputValue.trangThai,
        id: donHangSelect.maDonHang,
        nguoiMua: donHangSelect.nguoiMua,
        diaChi: donHangSelect.diaChi,
      },
    };
    updateDH(data);
  };

  const closeModal = () => {
    onVisible(false);
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
              <button onClick={onUpdateInfor}>Cập nhật</button>
              <button onClick={closeModal}>hủy bỏ</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default DonHang;
