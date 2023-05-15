// Component
import { useState } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import InputBase from "../inputBase/input";

// Icon
import FaceIconComponent from "../iconBase/faceIcon";
import GoogleIconComponent from "../iconBase/googleIcon";
import LinkinComponent from "../iconBase/linkinIcon";

// Const
import TypeError from "../const/messageConst";

// Styles
import "./index.scss";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });

  const attributesInput = {
    userName: {
      type: "text",
      className: "register-username input-text",
      placeholder: "User name",
      name: "userName",
      value: inputValue.userName,
    },
    email: {
      type: "text",
      className: "register-email input-text",
      placeholder: "Email",
      name: "email",
      value: inputValue.email,
    },
    phone: {
      type: "text",
      className: "register-phone input-text",
      placeholder: "Phone Number",
      name: "phone",
      value: inputValue.phone,
    },
    address: {
      type: "text",
      className: "register-address input-text",
      placeholder: "Address",
      name: "address",
      value: inputValue.address,
    },
    password: {
      type: showPassword ? "text" : "password",
      className: "register-password input-text",
      placeholder: "Password",
      name: "password",
      value: inputValue.password,
    },
    confirmPassword: {
      type: showConfirmPassword ? "text" : "password",
      className: "register-confirm-password input-text",
      placeholder: "Confirm password",
      name: "confirmPassword",
      value: inputValue.confirmPassword,
    },
  };
  const [messageError, setMessageError] = useState("");

  const onChange = (e) => {
    setInputValue((inputValue) => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickEye = () => {
    setShowPassword(!showPassword);
  };

  const onClickConfirmEye = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const [messageApiDevelop, contextHolder] = message.useMessage();
  const alertDevelop = () => {
    messageApiDevelop.info("Chức năng đang phát triển!");
  };

  const onClick = () => {
    // console.log(listAccount);
    const regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const strongRegex = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{7,20}$/;
    // ^(?=.*[A-Z])(?=.*\d).{7,20}$
    if (!regEmail.test(inputValue.email)) {
      setMessageError(TypeError.INCORRECT_EMAIL);
    } else if (inputValue.email === "" || inputValue.password === "") {
      setMessageError(TypeError.EMPTY_MESSAGE);
    } else if (!strongRegex.test(inputValue.password)) {
      setMessageError(TypeError.INCORRECT_PASSWORDRG);
    } else {
      setMessageError("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="register-container">
        <div className="overlay-register">
          <h1>Hello friends</h1>
          <p>If you alrealy have an account login here and have fun.</p>
          <button>
            <Link
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              to="/login"
            >
              Login
            </Link>
          </button>
        </div>
        <div className="register">
          <h1>register here!</h1>
          {Object.keys(attributesInput).map((key) => {
            if (key !== "password" && key !== "confirmPassword") {
              return (
                <InputBase
                  attributes={attributesInput[key]}
                  at
                  onChange={onChange}
                />
              );
            }
          })}
          <div className="register-password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="register-password input-text"
              placeholder="Password"
              name="password"
              value={inputValue.password}
              onChange={onChange}
            />
            {!showPassword && (
              <EyeInvisibleOutlined
                className="register-eye"
                onClick={onClickEye}
              />
            )}
            {showPassword && (
              <EyeOutlined className="register-eye" onClick={onClickEye} />
            )}
          </div>
          <div className="register-confirm-password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="register-confirm-password input-text"
              placeholder="Confirm password"
              name="confirmPassword"
              value={inputValue.confirmPassword}
              onChange={onChange}
            />
            {!showConfirmPassword && (
              <EyeInvisibleOutlined
                className="register-eye"
                onClick={onClickConfirmEye}
              />
            )}
            {showConfirmPassword && (
              <EyeOutlined
                className="register-eye"
                onClick={onClickConfirmEye}
              />
            )}
          </div>
          {messageError && <p className="error-message">{messageError}</p>}
          <button onClick={onClick} className="register-sign-btn">
            Register
          </button>
          {contextHolder}
          <div className="register-social">
            <FaceIconComponent onClick={alertDevelop} />
            <GoogleIconComponent onClick={alertDevelop} />
            <LinkinComponent onClick={alertDevelop} />
          </div>
        </div>
      </div>
    </div>
  );
}
