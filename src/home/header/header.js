import { useRef, useState } from "react"
import { SearchOutlined, UserOutlined, ExportOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./index.scss";
import { Link } from "react-router-dom";
function Header(props) {
    const [visibleHeader, setVisibleHeader] = useState(true);
    const [visibleAccount, setVisibleAcount] = useState(true);
    const [visibleSeacrh, setVisibleSearch] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [visibleDropDown, setVisibleDropDown] = useState(false);
    const inputRef = useRef(null);

    const onClickUser = () => {
        setVisibleAcount(true);
        setVisibleDropDown(!visibleDropDown);
    }

    const onMouseLeave = () => {
        setVisibleDropDown(false);
    }

    const onLogout = () => {
        setVisibleAcount(false);
    }

    const onChange = (e) => {
        setSearchValue(e.target.value);
    }

    const onSearch = () => {
        console.log(searchValue);
        inputRef.current.value = '';
    }

    const onFocus = () => {
        if (visibleSeacrh) {
            console.log(inputRef.current.value);
        }
        setVisibleSearch(!visibleSeacrh);
    }

    return (
        <div className="header">
            <div className="header-logo">
                <img src="https://theme.hstatic.net/1000313927/1001030277/14/logo.png?v=13"/>
                <div className="banner">
                    {/* <h1 className="nameStore">SESPORT</h1> */}
                    {/* <p>NUMBER ONE FOR FOOTBALL SHIRTS</p> */}
                </div>
            </div>
            <div className="header-nav">
                <p className="addressStores">Hệ thống của hàng</p>
                <p className="contact">Liên hệ</p>
                {visibleSeacrh && 
                    <div className="wrapSearch">
                        <input ref={inputRef} onChange={onChange} placeholder="Hãy nhập nội dung tìm kiếm"/>
                        <SearchOutlined onClick={onSearch} className="iconSearch" />
                    </div>
                }
                <p onClick={onFocus} className="search">Tìm kiếm <SearchOutlined /></p>
                {/*VAT: truyền tên qua props*/}
                <div className="wrapDropDown">
                    <p onClick={onClickUser} className={`user ${visibleAccount ? "borderRight" : ""}`}><UserOutlined /> {visibleAccount ? "name" : ""}</p>
                    <div onMouseLeave={onMouseLeave} className={`${visibleAccount ? "" : "leftDropDown"} ${visibleDropDown ? "menuDropDown" : "none"}`}>
                        <Link to="/" element className="profile-user item">
                            <p>Profile</p>
                        </Link>
                        <Link to="/login" element className="logout-user item">
                            <p>Login</p>
                        </Link>
                    </div>
                </div>
                {visibleAccount && <p onClick={onLogout}><ExportOutlined /> Đăng xuất</p>}
                {visibleAccount && <p><ShoppingCartOutlined /> (0)</p>}
            </div>
        </div>
    )
}

export default Header;