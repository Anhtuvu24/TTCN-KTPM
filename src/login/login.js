// Component
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

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
  const { listAccount, getListAccount } = props;
  const [showPassword, seShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  })

  const attributesInput = {
    email: {
      type: "text",
      className: "login-username input-text",
      placeholder: "Email",
      name: "email",
      value: inputValue.email,
    },
    password: {
      type: showPassword ? "text" : "password",
      className: "login-password input-text",
      placeholder: "Password",
      name: "password",
      value: inputValue.password,
    },
  }
  
  const [messageError, setMessageError] = useState("");
  const [account, setAccount] = useState(null);

  useEffect(() => {
    debugger;
    function fecthApi() {
      getListAccount();
    }
    fecthApi();
  }, []);

  const onChange = (e) => {
    e.persist();
    setInputValue((inputValue) => ({
      ...inputValue,
      [e.target.name]: e.target.value,
    }))
  }

  const onClickEye = () => {
    seShowPassword(!showPassword);
  };

  const [messageApiDevelop, contextHolder] = message.useMessage();
  const alertDevelop = () => {
    messageApiDevelop.info("Chức năng đang phát triển!");
  };

  const onClick = () => {
    listAccount.map((item, index) => {
      if (inputValue.email === item.username && inputValue.password === item.password) {
        setAccount(item);
        setMessageError("");
      }
    })
    if (account) {
      console.log(account);
    } else if (inputValue.email === "" || inputValue.password === "") {
      setMessageError(TypeError.EMPTY_MESSAGE);
    } else {
      setMessageError(TypeError.INCORRECT_MESSAGE);
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
            attributes={attributesInput.email}
            onChange={onChange}
          />
          <div className="login-password-container">
            <InputBase 
            attributes={attributesInput.password}
            onChange={onChange}
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
