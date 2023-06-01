import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./index.scss";
import User from "./userItem";
import AccountContainer from "./accountContainer";
import {
  getListAccount,
  deleteUser,
} from "../../../features/saga/sagaAccount/typeAccountSaga";

function UserTable({ listAccount, getListAccount, deleteUser, messageStatus }) {
  const [visible, onVisible] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    getListAccount();
  }, [messageStatus]);
  const columnName = [
    {
      name: "Mã người dùng",
    },
    {
      name: "Tên tài khoản",
    },
    {
      name: "Mật khẩu",
    },
    {
      name: "Họ tên",
    },
    {
      name: "Số điện thoại",
    },
    {
      name: "Giới tính",
    },
    {
      name: "Ngày sinh",
    },
    {
      name: "Địa chỉ",
    },
  ];

  const onClickDelete = (id) => {
    deleteUser(id);
  };

  const onClickUpdate = (userSelect) => {
    setUser({
      id: userSelect.id,
      username: userSelect.tenDangNhap,
      email: userSelect.tenDangNhap,
      fullName: userSelect.hoTen,
      password: userSelect.matKhau,
      address: userSelect.diaChi,
      phone: userSelect.soDienThoai,
      date: userSelect.ngaySinh,
      sex: userSelect.gioiTinh,
    });
    onVisible(!visible);
  };
  return (
    <div className="user-table-container">
      {visible && user ? (
        <AccountContainer user={user} onVisible={onVisible} />
      ) : null}
      {columnName.map((item, index) => {
        return <p className="title">{item.name}</p>;
      })}
      <div className="information">
        {listAccount &&
          listAccount.map((item, index) => {
            return (
              <div className="row">
                <User index={index} item={item} />
                <button onClick={() => onClickUpdate(item)}>Sửa</button>
                <button onClick={() => onClickDelete(item.id)}>Xóa</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const listAccount = state.user.listAccount;
  const messageStatus = state.user.currentMessage;
  return { listAccount, messageStatus };
};

const mapDispatchToProps = (dispatch) => ({
  getListAccount: () => dispatch(getListAccount()),
  deleteUser: (id) => dispatch(deleteUser(id)),
});

const UserTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);

export default UserTableContainer;
