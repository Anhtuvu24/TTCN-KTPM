import React, { useState } from "react";
import avatarSimple from "../../../avatarImg/avatarSimple.jpg";
import InputBase from "../../../inputBase/input";
import "./index.scss";
import moment from "moment/moment";

function TheLoai(props) {
  const {
    onVisible,
    onVisibleAdd,
    visibleAdd,
    theLoai,
    addTL,
    updateTL,
    listDM,
  } = props;
  const [inputValue, setInputValue] = useState({
    tenTheLoai: theLoai.tenTheLoai,
  });
  const [selectedOption, setSelectedOption] = useState(
    theLoai.maDanhMuc ? theLoai.maDanhMuc : listDM[listDM.length - 1].id
  );

  const attributesInput = {
    tenTheLoai: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Tên thể loại",
      name: "tenTheLoai",
      value: inputValue.tenTheLoai,
      defaultValue: theLoai.tenTheLoai,
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
      id: theLoai.id,
      updateInforData: {
        tenTheLoai: inputValue.tenTheLoai,
        maDanhMuc: selectedOption,
      },
    };
    updateTL(data);
  };

  const onClickThem = () => {
    const data = {
      tenTheLoai: inputValue.tenTheLoai,
      maDanhMuc: selectedOption,
    };
    addTL(data);
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
              <label style={{ width: "110px", display: "inline-block" }}>
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
                {listDM.map((item) => {
                  return <option value={item.id}>{item.id}</option>;
                })}
              </select>
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

export default TheLoai;
