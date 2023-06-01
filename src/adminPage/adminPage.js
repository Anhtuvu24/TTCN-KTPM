import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { message } from "antd";
import { useDispatch } from "react-redux";

import "./index.scss";
import LeftArrow from "../iconBase/leftArrow";
import ItemMenu from "./itemMenuBase/itemBase";
import ProductTableContainer from "./tables/productTable/productTable";
import DanhMucTable from "./tables/danhMucTable/danhMucTable";
import TheLoaiTable from "./tables/theLoaiTable/theLoaiTable";
import UserTableContainer from "./tables/userTable/userTable";
import DonHangTableContainer from "./tables/donHangTable/donHangTable";

import { clearMessage } from "../features/slice/accountUser";
import { clearDanhMucMessage } from "../features/slice/danhMuc";
import { clearTheLoaiMessage } from "../features/slice/theLoai";
import { clearProductMessage } from "../features/slice/product";
import { clearDonHangMessage } from "../features/slice/donHang";
function AdminPage(props) {
  const {
    messageStatus,
    messageDMStatus,
    listDM,
    messageTLStatus,
    messagePDStatus,
    messageDHStatus,
  } = props;
  const navigate = useNavigate();
  const [itemSelect, setItemSelect] = useState("sanPham");
  const [titleTable, setTitleTable] = useState("Sản phẩm");
  const dispatch = useDispatch();
  const menuItems = [
    {
      type: "sanPham",

      name: "Sản phẩm",
    },
    {
      type: "danhMuc",

      name: "Danh mục",
    },
    {
      type: "theLoai",

      name: "Thể loại",
    },
    {
      type: "nguoiDung",

      name: "Người dùng",
    },
    {
      type: "donHang",

      name: "Đơn hàng",
    },
  ];

  const onBackHome = () => {
    navigate("/");
  };
  const onSelectItem = (type, name) => {
    setItemSelect(type);
    setTitleTable(name);
  };
  const renderTable = () => {
    if (itemSelect === "sanPham") {
      return <ProductTableContainer />;
    } else if (itemSelect === "danhMuc") {
      return <DanhMucTable />;
    } else if (itemSelect === "theLoai") {
      return <TheLoaiTable />;
    } else if (itemSelect === "nguoiDung") {
      return <UserTableContainer />;
    } else {
      return <DonHangTableContainer />;
    }
  };
  const [messageApiDevelop, contextHolder] = message.useMessage();
  const alertMessage = (messageStatus) => {
    if (messageStatus.type === "error")
      messageApiDevelop.error(messageStatus.message);
    else if (messageStatus.type === "success") {
      messageApiDevelop.success(messageStatus.message);
    }
  };
  useEffect(() => {
    if (messageStatus) {
      alertMessage(messageStatus);
    } else if (messageDMStatus) {
      alertMessage(messageDMStatus);
    } else if (messageTLStatus) {
      alertMessage(messageTLStatus);
    } else if (messagePDStatus) {
      alertMessage(messagePDStatus);
    } else if (messageDHStatus) {
      alertMessage(messageDHStatus);
    }
    setTimeout(() => {
      dispatch(clearMessage());
      dispatch(clearDanhMucMessage());
      dispatch(clearTheLoaiMessage());
      dispatch(clearProductMessage());
      dispatch(clearDanhMucMessage());
      dispatch(clearDonHangMessage());
    }, 1000);
  }, [
    messageStatus,
    messageDMStatus,
    messageTLStatus,
    messagePDStatus,
    messageDHStatus,
  ]);
  return (
    <div className="admin-container">
      {contextHolder}
      <div onClick={onBackHome} className="back-home">
        <LeftArrow />
        <p>Back home</p>
      </div>
      <h1>ADMIN PAGE</h1>
      <div className="body">
        <div className="menu">
          <h2 className="title">Bảo trì</h2>
          {menuItems.map((item, index) => {
            return (
              <ItemMenu
                type={item.type}
                itemSelect={itemSelect}
                name={item.name}
                onSelectItem={onSelectItem}
              />
            );
          })}
        </div>
        <div className="table">
          <h2>{`Danh sách ${titleTable.toLowerCase()}`}</h2>
          {/* <ProductTable /> */}
          {/* <DanhMucTable /> */}
          {/* <TheLoaiTable /> */}
          {/* <UserTable /> */}
          {/* <DonHangTable /> */}
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
