import { createRef, useRef, useState } from "react"
import { SearchOutlined, UserOutlined, ExportOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./index.scss";
function Header(props) {
    const [visibleHeader, setVisibleHeader] = useState(true);
    const [visibleBorder, setVisibleBorder] = useState(true);
    const [visibleAccount, setVisibleAcount] = useState(true);
    const [visibleSeacrh, setVisibleSearch] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef(null);

    const onLogin = () => {
        setVisibleAcount(true);
        setVisibleBorder(true);
    }

    const onLogout = () => {
        setVisibleAcount(false);
        setVisibleBorder(false);
    }

    const onChange = (e) => {
        setSearchValue(e.target.value);
    }

    const onSearch = () => {
        console.log(searchValue);
        inputRef.current.value = '';
    }

    const onFocus = () => {
        console.log(inputRef.current.value);
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
                <p onClick={onLogin} className={`user ${visibleBorder ? "borderRight" : ""}`}><UserOutlined /> {visibleAccount ? "name" : ""}</p>
                {visibleAccount && <p onClick={onLogout}><ExportOutlined /> Đăng xuất</p>}
                {visibleAccount && <p><ShoppingCartOutlined /> (0)</p>}
            </div>
        </div>
    )
}

export default Header;