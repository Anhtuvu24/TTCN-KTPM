import React, { useState } from "react";
import avatarSimple from "../../../avatarImg/avatarSimple.jpg";
import InputBase from "../../../inputBase/input";
import "./index.scss";
import moment from "moment/moment";

function AccountAbout(props) {
  const { onVisible, user, updateUserOnTable } = props;
  const [inputValue, setInputValue] = useState({
    userName: user.username,
    fullName: user.fullName,
    password: user.password,
    address: user.address,
    phone: user.phone,
    date: moment(user.date).format("YYYY-MM-DD"),
    sex: user.sex === 0 ? "Nam" : "Nữ",
  });

  const attributesInput = {
    userName: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "User name",
      name: "userName",
      value: inputValue.userName,
      defaultValue: user.username,
    },
    password: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "Password",
      name: "password",
      value: inputValue.password,
      defaultValue: user.password,
    },
    fullName: {
      type: "text",
      className: "profile-full-name input-text",
      placeholder: "Full name",
      name: "fullName",
      value: inputValue.fullName,
      defaultValue: user.fullName,
    },
    phone: {
      type: "text",
      className: "profile-phone input-text",
      placeholder: "Phone Number",
      name: "phone",
      value: inputValue.phone,
      defaultValue: user.phone,
    },
    address: {
      type: "text",
      className: "profile-address input-text",
      placeholder: "Address",
      name: "address",
      value: inputValue.address,
      defaultValue: user.address,
    },
    date: {
      type: "date",
      className: "profile-date input-text",
      placeholder: "Date",
      name: "date",
      value: inputValue.date,
      defaultValue: moment(user.date).format("YYYY-MM-DD"),
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
      id: user.id,
      updateInforData: {
        ...inputValue,
        permission: user.permission,
        password: user.password,
      },
    };
    updateUserOnTable(data);
    onVisible(false);
  };

  const closeModal = () => {
    onVisible(false);
  };

  return (
    <div onClick={closeModal} className="model">
      <div className="containerUpdate" onClick={handleClick}>
        <>
          <div className="avatar-container">
            <img src={avatarSimple} />
          </div>
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
            <div className="profile-radio">
              <label>Giới tính</label>
              <input
                onChange={onChange}
                type="radio"
                name="sex"
                value="Nam"
                checked={inputValue.sex === "Nam"}
              />{" "}
              Nam
              <input
                onChange={onChange}
                type="radio"
                name="sex"
                value="Nữ"
                checked={inputValue.sex === "Nữ"}
              />{" "}
              Nữ
            </div>
            <div className="button-container">
              <button onClick={onUpdateInfor}>Cập nhật</button>
              <button onClick={closeModal}>Hủy bỏ</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default AccountAbout;
