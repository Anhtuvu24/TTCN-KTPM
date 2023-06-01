// Component
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import InputBase from "../inputBase/input";
import { register } from "../features/saga/sagaAccount/typeAccountSaga";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Icon
import FaceIconComponent from "../iconBase/faceIcon";
import GoogleIconComponent from "../iconBase/googleIcon";
import LinkinComponent from "../iconBase/linkinIcon";

// Const
import TypeError from "../const/messageConst";

// Styles
import "./index.scss";

function Register(props) {
  const { register, messageStatus, userLogin } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    userName: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    date: "",
    sex: "",
  });
  const [messageApiDevelop, contextHolder] = message.useMessage();

  const attributesInput = {
    userName: {
      type: "text",
      className: "register-username input-text",
      placeholder: "User name",
      name: "userName",
      value: inputValue.userName,
    },
    fullName: {
      type: "text",
      className: "register-email input-text",
      placeholder: "Full name",
      name: "fullName",
      value: inputValue.fullName,
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
    date: {
      type: "date",
      className: "profile-date input-text",
      placeholder: "Date",
      name: "date",
      value: inputValue.date,
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

  const alertDevelop = () => {
    messageApiDevelop.info("Chức năng đang phát triển!");
  };

  const alertMessage = (messageStatus) => {
    if (messageStatus.type === "error")
      messageApiDevelop.error(messageStatus.messageAlert);
    else if (messageStatus.type === "success") {
      messageApiDevelop.success(messageStatus.messageAlert);
    }
  };

  useEffect(() => {
    if (messageStatus) {
      alertMessage(messageStatus);
    }
    if (userLogin) {
      navigate("/");
    }
  }, [messageStatus, userLogin]);

  const onClick = () => {
    const strongRegex = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{7,20}$/;
    const userNameRegex = /^[a-z]{5,15}$/;
    const phoneRegex = /^\d{9,11}$/;
    if (
      inputValue.userName === "" ||
      inputValue.fullName === "" ||
      inputValue.password === "" ||
      inputValue.confirmPassword === "" ||
      inputValue.address === "" ||
      inputValue.phone === "" ||
      inputValue.date === "" ||
      inputValue.sex === ""
    ) {
      setMessageError(TypeError.EMPTY_MESSAGE);
    } else if (!strongRegex.test(inputValue.password)) {
      setMessageError(TypeError.INCORRECT_PASSWORDRG);
    } else if (inputValue.password !== inputValue.confirmPassword) {
      setMessageError(TypeError.INCORRECT_CONFIRM_PASSWORD);
    } else if (!userNameRegex.test(inputValue.userName)) {
      setMessageError(TypeError.INCORRECT_USER_NAME);
    } else if (!phoneRegex.test(inputValue.phone)) {
      setMessageError(TypeError.INCORRECT_PHONE);
    } else {
      setMessageError("");
      const data = {
        tenDangNhap: inputValue.userName,
        matKhau: inputValue.password,
        hoTen: inputValue.fullName,
        soDienThoai: inputValue.phone,
        gioiTinh: inputValue.sex === "Nam" ? 0 : 1,
        ngaySinh: inputValue.date,
        diaChi: inputValue.address,
      };
      register(data);
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
                  onChange={onChange}
                />
              );
            }
          })}
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
          <div className="register-password-container">
            <InputBase
              attributes={attributesInput.password}
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
            <InputBase
              attributes={attributesInput.confirmPassword}
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

const mapStateToProps = (state, ownProps) => {
  const userLogin = state.user.currentUser;

  const messageStatus = state.user.currentMessage;
  return { messageStatus, userLogin };
};
const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(register(data)),
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default RegisterContainer;
