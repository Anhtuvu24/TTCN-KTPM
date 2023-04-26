// Component
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

// Icon
import FaceIconComponent from "../iconBase/faceIcon";
import GoogleIconComponent from "../iconBase/googleIcon";
import LinkinComponent from "../iconBase/linkinIcon";

// Styles
import "./index.scss";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

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
          <input
            type="text"
            className="register-name input-text"
            placeholder="Name"
          />
          <input
            type="text"
            className="register-username input-text"
            placeholder="User name"
          />
          <input
            type="text"
            className="register-email input-text"
            placeholder="Email"
          />
          <input
            type="text"
            className="register-phone input-text"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="register-address input-text"
            placeholder="Address"
          />
          <div className="register-password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="register-password input-text"
              placeholder="Password"
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
          <button className="register-sign-btn">Register</button>
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
