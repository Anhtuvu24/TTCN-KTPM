import React, { useEffect, useState } from "react";
import "./index.scss";
import DanhMuc from "./danhMucItem";
import { connect } from "react-redux";
import {
  getListDM,
  deleteDM,
} from "../../../features/saga/sagaDanhMuc/typeDanhMucSaga";
import DanhMucContainer from "./danhMucContainer";
function DanhMucTable({ getListDM, listDM, messageStatus, deleteDM }) {
  const [visible, onVisible] = useState(false);
  const [visibleAdd, onVisibleAdd] = useState(false);
  const [danhMucSelect, setDanhMucSelect] = useState({});
  useEffect(() => {
    getListDM();
  }, [messageStatus]);
  const columnName = [
    {
      name: "Mã danh mục",
    },
    {
      name: "Tên danh mục",
    },
  ];

  const onClickSua = (item) => {
    setDanhMucSelect(item);
    onVisible(!visible);
  };

  const onClickThem = () => {
    onVisibleAdd(true);
  };

  const onClickXoa = (id) => {
    deleteDM(id);
  };
  return (
    <>
      <div className="danh-muc-table-container">
        {visible || visibleAdd ? (
          <DanhMucContainer
            onVisible={onVisible}
            danhMuc={danhMucSelect}
            visibleAdd={visibleAdd}
            onVisibleAdd={onVisibleAdd}
          />
        ) : null}

        {columnName.map((item, index) => {
          return <p className="title">{item.name}</p>;
        })}
        <div className="information">
          {listDM.map((item, index) => {
            return (
              <div className="row">
                <DanhMuc index={index} item={item} />
                <button onClick={() => onClickSua(item)}>Sửa</button>
                <button onClick={() => onClickXoa(item.id)}>Xóa</button>
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
  const listDM = state.danhMuc.listDanhMuc;
  const messageStatus = state.danhMuc.currentDanhMucMessage;
  return { listDM, messageStatus };
};

const mapDispatchToProps = (dispatch) => ({
  getListDM: () => dispatch(getListDM()),
  deleteDM: (id) => dispatch(deleteDM(id)),
});

const DanhMucTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DanhMucTable);

export default DanhMucTableContainer;
