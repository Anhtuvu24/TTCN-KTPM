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
import { clearCart } from "../../features/slice/cart";
import { useDispatch } from "react-redux";
import img from "../../avatarImg/349678739_169908899103102_4039015863226314269_n.png";
function Header(props) {
  const { userLogin, onVisible, onVisibleModalCart, cart } = props;
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const inputRef = useRef(null);
  const numberItem = cart.reduce((sum, item) => sum + item.number, 0);
  const openModalCart = () => {
    onVisibleModalCart();
  };

  const onClickUser = () => {
    setVisibleDropDown(!visibleDropDown);
  };

  const onMouseLeave = () => {
    setVisibleDropDown(false);
  };

  const onLogout = () => {
    dispatch(logoutSucess());
    dispatch(clearCart()); // VAT clear gio hang khi dang xuat
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    inputRef.current.value = "";
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img src={img} />
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
            {userLogin ? (
              <>
                <div className="profile-user item">
                  <p onClick={onVisible}>Profile</p>
                </div>
                {userLogin.permission === "ADMIN" && (
                  <Link to="/admin" element className="logout-user item">
                    <p>Admin</p>
                  </Link>
                )}
              </>
            ) : (
              <Link to="/login" element className="logout-user item">
                <p>Login</p>
              </Link>
            )}
          </div>
        </div>
        {userLogin && (
          <p onClick={onLogout}>
            <ExportOutlined /> Đăng xuất
          </p>
        )}
        {userLogin && (
          <p onClick={openModalCart}>
            <ShoppingCartOutlined /> ({numberItem})
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
