import React, { useEffect, useState } from "react";
import "./index.scss";
import TheLoai from "./theLoaiItem";
import TheLoaiContainer from "./theLoaiContainer";
import { getListTL } from "../../../features/saga/sagaTheLoai/typeTheLoaiSaga";
import { connect } from "react-redux";
import { deleteTL } from "../../../features/saga/sagaTheLoai/typeTheLoaiSaga";

function TheLoaiTable({ listTL, messageStatus, getListTL, deleteTL }) {
  const [visible, onVisible] = useState(false);
  const [visibleAdd, onVisibleAdd] = useState(false);
  const [theLoaiSelect, setTheLoaiSelect] = useState({});
  useEffect(() => {
    getListTL();
  }, [messageStatus]);
  const columnName = [
    {
      name: "Mã thể loại",
    },
    {
      name: "Tên thể loại",
    },
    {
      name: "Mã danh mục",
    },
  ];

  const onClickSua = (item) => {
    setTheLoaiSelect(item);
    onVisible(!visible);
  };

  const onClickThem = () => {
    onVisibleAdd(true);
  };

  const onCLickXoa = (item) => {
    deleteTL(item);
  };
  return (
    <>
      <div className="the-loai-table-container">
        {visible || visibleAdd ? (
          <TheLoaiContainer
            onVisible={onVisible}
            theLoai={theLoaiSelect}
            visibleAdd={visibleAdd}
            onVisibleAdd={onVisibleAdd}
          />
        ) : null}
        {columnName.map((item, index) => {
          return <p className="title">{item.name}</p>;
        })}
        <div className="information">
          {listTL.map((item, index) => {
            return (
              <div className="row">
                <TheLoai index={index} item={item} />
                <button onClick={() => onClickSua(item)}>Sửa</button>
                <button onClick={() => onCLickXoa(item)}>Xóa</button>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={onClickThem} className="add-btn">
        Thêm mới
      </button>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const listTL = state.theLoai.listTheLoai;
  const messageStatus = state.theLoai.currentTheLoaiMessage;
  return { listTL, messageStatus };
};

const mapDispatchToProps = (dispatch) => ({
  getListTL: () => dispatch(getListTL()),
  deleteTL: (input) => dispatch(deleteTL(input)),
});

const TheLoaiTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheLoaiTable);

export default TheLoaiTableContainer;
