import React, { useEffect, useState } from "react";
import "./index.scss";
import { list } from "./listDH";
import User from "./donHangItem";
import { connect } from "react-redux";
import {
  getListDH,
  deleteDH,
} from "../../../features/saga/sagaDonHang/typeDonHangSaga";
import DonHangContainer from "./donHangContainer";
function DonHangTable({ getListDH, messageStatus, listDH = [], deleteDH }) {
  const [visible, onVisible] = useState(false);
  const [donHangSelect, setDonHangSelect] = useState({});
  useEffect(() => {
    getListDH();
  }, []);
  const columnName = [
    {
      name: "Mã đơn hàng",
    },
    {
      name: "Trạng thái",
    },

    {
      name: "Ngày mua",
    },
    {
      name: "Sản phẩm",
    },
    {
      name: "Địa chỉ",
    },
    {
      name: "Tổng tiền",
    },
    {
      name: "Người mua",
    },
  ];

  const onClickDelete = (id) => {
    deleteDH(id);
  };

  const onClickSua = (item) => {
    setDonHangSelect(item);
    onVisible(true);
  };

  return (
    <div className="don-hang-table-container">
      {visible ? (
        <DonHangContainer onVisible={onVisible} donHangSelect={donHangSelect} />
      ) : null}
      {columnName.map((item, index) => {
        return <p className="title">{item.name}</p>;
      })}
      <div className="information">
        {listDH.map((item, index) => {
          return (
            <div className="row">
              <User index={index} item={item} />
              <button onClick={() => onClickSua(item)}>Sửa</button>
              <button onClick={() => onClickDelete(item.maDonHang)}>Xóa</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  // const listTL = state.theLoai.listTheLoai;
  const messageStatus = state.donHang.currentDonHangMessage;
  const listDH = state.donHang.listDonHang;
  return { messageStatus, listDH };
};

const mapDispatchToProps = (dispatch) => ({
  getListDH: () => dispatch(getListDH()),
  deleteDH: (input) => dispatch(deleteDH(input)),
});

const DonHangTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DonHangTable);

export default DonHangTableContainer;
