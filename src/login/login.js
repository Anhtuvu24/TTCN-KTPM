// Component
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

// Icon
import FaceIconComponent from "../iconBase/faceIcon";
import GoogleIconComponent from "../iconBase/googleIcon";
import LinkinComponent from "../iconBase/linkinIcon";

// Styles
import "./index.scss";

function Login(props) {
  const { listAccount, getListAccount } = props;
  debugger;
  const [showPassword, seShowPassword] = useState(false);

  useEffect(() => {
    debugger;
    function fecthApi() {
      getListAccount();
    }
    fecthApi();
  }, []);

  const onClickEye = () => {
    seShowPassword(!showPassword);
  };

  const [messageApiDevelop, contextHolder] = message.useMessage();
  const alertDevelop = () => {
    messageApiDevelop.info("Chức năng đang phát triển!");
  };

  const onClick = () => {
    console.log(listAccount);
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
      <div className="login-container">
        <div className="login">
          <h1>Login here!</h1>
          <input
            type="text"
            className="login-username input-text"
            placeholder="User name"
          />
          <div className="login-password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="login-password input-text"
              placeholder="Password"
            />
            {!showPassword && (
              <EyeInvisibleOutlined
                className="login-eye"
                onClick={onClickEye}
              />
            )}
            {showPassword && (
              <EyeOutlined className="login-eye" onClick={onClickEye} />
            )}
          </div>
          <Link to="/" element className="login-forgot-password">
            Forgot your password!
          </Link>
          <button className="login-sign-btn" onClick={onClick}>
            Sign in
          </button>
          {contextHolder}
          <div className="login-social">
            <FaceIconComponent onClick={alertDevelop} />
            <GoogleIconComponent onClick={alertDevelop} />
            <LinkinComponent onClick={alertDevelop} />
          </div>
        </div>

        <div className="overlay-login">
          <h1>Start your journey now</h1>
          <p>If you don't have account yet, join us and start your journey.</p>
          <button>
            <Link
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              to="/register"
            >
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
