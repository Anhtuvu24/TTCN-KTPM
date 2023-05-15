import { useRef, useState } from "react";
import {
  SearchOutlined,
  UserOutlined,
  ExportOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Link } from "react-router-dom";
import { logoutSucess } from "../../features/slice/accountUser";
import { useDispatch } from "react-redux";
function Header(props) {
  const { userLogin, onVisible } = props;
  const dispatch = useDispatch();
  // debugger;
  const [searchValue, setSearchValue] = useState("");
  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const [visibleModalIF, setVisibleModalIF] = useState(true);
  const inputRef = useRef(null);

  const onClickUser = () => {
    setVisibleDropDown(!visibleDropDown);
  };

  const onMouseLeave = () => {
    setVisibleDropDown(false);
  };

  const onLogout = () => {
    dispatch(logoutSucess());
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    console.log(searchValue);
    inputRef.current.value = "";
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img src="https://theme.hstatic.net/1000313927/1001030277/14/logo.png?v=13" />
        <div className="banner">
          {/* <h1 className="nameStore">SESPORT</h1> */}
          {/* <p>NUMBER ONE FOR FOOTBALL SHIRTS</p> */}
        </div>
      </div>
      <div className="header-nav">
        <p className="addressStores">Hệ thống của hàng</p>
        <p className="contact">Liên hệ</p>
        <div className="wrapSearch">
          <input
            ref={inputRef}
            onChange={onChange}
            placeholder="Hãy nhập nội dung tìm kiếm"
          />
        </div>
        <p onClick={onSearch} className="search">
          Tìm kiếm <SearchOutlined />
        </p>
        {/*VAT: truyền tên qua props*/}
        <div className="wrapDropDown">
          <p
            onClick={onClickUser}
            className={`user ${userLogin ? "borderRight" : ""}`}
          >
            <UserOutlined /> {userLogin ? userLogin.username : ""}
          </p>
          <div
            onMouseLeave={onMouseLeave}
            className={`${userLogin ? "" : "leftDropDown"} ${
              visibleDropDown ? "menuDropDown" : "none"
            }`}
          >
            <Link to="/" element className="profile-user item">
              <p onClick={onVisible}>Profile</p>
            </Link>
            <Link to="/login" element className="logout-user item">
              <p>Login</p>
            </Link>
          </div>
        </div>
        {userLogin && (
          <p onClick={onLogout}>
            <ExportOutlined /> Đăng xuất
          </p>
        )}
        {userLogin && (
          <p>
            <ShoppingCartOutlined /> (0)
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
