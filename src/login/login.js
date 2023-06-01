// Component
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/slice/accountUser";
// Icon
import FaceIconComponent from "../iconBase/faceIcon";
import GoogleIconComponent from "../iconBase/googleIcon";
import LinkinComponent from "../iconBase/linkinIcon";

// Const
import TypeError from "../const/messageConst";

// Styles
import "./index.scss";
import InputBase from "../inputBase/input";

function Login(props) {
  const { userLogin, login } = props;
  const [showPassword, seShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const attributesInput = {
    username: {
      type: "text",
      className: "login-username input-text",
      placeholder: "Username",
      name: "username",
      value: inputValue.username,
    },
    password: {
      type: showPassword ? "text" : "password",
      className: "login-password input-text",
      placeholder: "Password",
      name: "password",
      value: inputValue.password,
    },
  };
  const navigate = useNavigate();

  const [messageError, setMessageError] = useState("");
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (userLogin) {
      navigate("/");
    }
  }, [userLogin, account]);

  const onChange = (e) => {
    e.persist();
    setInputValue((inputValue) => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickEye = () => {
    seShowPassword(!showPassword);
  };

  const [messageApiDevelop, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const alertDevelop = () => {
    messageApiDevelop.info("Chức năng đang phát triển!");
  };

  const checkLogin = () => {
    if (inputValue.username === "" || inputValue.password === "") {
      setMessageError(TypeError.EMPTY_MESSAGE);
    } /*else if (!account) {
      setMessageError(TypeError.INCORRECT_MESSAGE);
    }*/
  };

  const onClick = () => {
    login(inputValue);
    setMessageError("");
    setTimeout(() => {
      checkLogin();
    }, 300);
  };

  const onKeyPress = (e) => {
    console.log("check");
    if (e.which === 13) {
      onClick();
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
      <div className="login-container">
        <div className="login">
          <h1>Login here!</h1>
          <InputBase
            onKeyDown={onKeyPress}
            attributes={attributesInput.username}
            onChange={onChange}
          />
          <div className="login-password-container">
            <InputBase
              attributes={attributesInput.password}
              onChange={onChange}
              onKeyDown={onKeyPress}
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
          {messageError && <p className="error-message">{messageError}</p>}
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
