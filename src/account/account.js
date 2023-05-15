import React, { useState } from "react";
import avatarSimple from "../avatarImg/avatarSimple.jpg";
import InputBase from "../inputBase/input";
import "./index.scss";
import TypeError from "../const/messageConst";

function AccountAbout(props) {
  const { onVisible, userLogin } = props;
  const [modalChangePasss, setModalChangPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState({
    userName: userLogin.username,
    email: userLogin.username,
    password: "",
    newPassword: "",
    confirmNewPassword: "",
    address: userLogin.address,
    phone: userLogin.phone,
    date: "",
    sex: userLogin.sex,
  });

  const attributesInput = {
    userName: {
      type: "text",
      className: "profile-username input-text",
      placeholder: "User name",
      name: "userName",
      value: inputValue.userName,
      defaultValue: userLogin.username,
    },
    email: {
      type: "text",
      className: "profile-email input-text",
      placeholder: "Email",
      name: "email",
      value: inputValue.email,
      defaultValue: userLogin.username,
    },
    phone: {
      type: "text",
      className: "profile-phone input-text",
      placeholder: "Phone Number",
      name: "phone",
      value: inputValue.phone,
      defaultValue: userLogin.phone,
    },
    address: {
      type: "text",
      className: "profile-address input-text",
      placeholder: "Address",
      name: "address",
      value: inputValue.address,
      defaultValue: userLogin.address,
    },
    date: {
      type: "date",
      className: "profile-date input-text",
      placeholder: "Date",
      name: "date",
      value: inputValue.date,
      defaultValue: userLogin.date,
    },
  };
  const attributesPass = {
    password: {
      type: "password",
      className: "profile-password input-text",
      placeholder: "Password",
      name: "password",
      value: inputValue.password,
      defaultValue: "",
    },
    newPassword: {
      type: "password",
      className: "profile-new-password input-text",
      placeholder: "New password",
      name: "newPassword",
      value: inputValue.newPassword,
      defaultValue: "",
    },
    confirmNewPassword: {
      type: "password",
      className: "profile-confirm-new-password input-text",
      placeholder: "Confirm password",
      name: "confirmNewPassword",
      value: inputValue.newPassword,
      defaultValue: "",
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

  const checkInput = () => {
    if (inputValue.password === "" || inputValue.newPassword === "" || inputValue.confirmNewPassword === "") {
      setErrorMessage(TypeError.EMPTY_MESSAGE);
    } else if (inputValue.password !== userLogin.password) {
      setErrorMessage(TypeError.INCORRECT_PASSWORD)
    } else if (inputValue.newPassword !== inputValue.confirmNewPassword) {
      setErrorMessage(TypeError.INCORRECT_CONFIRM_PASSWORD)
    } else {
      setErrorMessage("");
    }
  }

  const onClick = () => {
    console.log(inputValue);
    setTimeout(() => {
      checkInput();
    }, 300)
  }

  const onKeyPress = (e) => {
    if(e.which === 13) {
      onClick();
    }
  }

  const changeModal = () => {
    setModalChangPass(!modalChangePasss);
  };

  return (
    <div onClick={onVisible} className="model">
      <div className="containerUpdate" onClick={handleClick}>
        {!modalChangePasss ? (
          <>
            <div className="avatar-container">
              <img src={avatarSimple} />
            </div>
            <div className="Profile-container">
              <h2>Tài khoản của tôi</h2>
              <div className="profile-input">
                {Object.keys(attributesInput).map((key) => {
                  if (key !== "password" && key !== "confirmPassword") {
                    return (
                      <InputBase
                        attributes={attributesInput[key]}
                        onChange={onChange}
                      />
                    );
                  }
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
                <button>Cập nhật</button>
                <button onClick={changeModal}>Đổi mật khẩu</button>
              </div>
            </div>
          </>
        ) : (
          <div className="change-password-container">
            <h1>ĐỔI MẬT KHẨU</h1>
            {Object.keys(attributesPass).map((key) => {
              return (
                <InputBase
                  attributes={attributesPass[key]}
                  onChange={onChange}
                  onKeyDown={onKeyPress}

                />
              );
            })}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className="back-profile" onClick={changeModal}>Trở về trang thông tin</p>
            <button onClick={onClick}>Cập nhật</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountAbout;
