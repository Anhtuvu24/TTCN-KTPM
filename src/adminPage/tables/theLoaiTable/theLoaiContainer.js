import { connect } from "react-redux";
import { createSelector } from "reselect";
import TheLoai from "./theLoai";
import { updateUserOnTable } from "../../../features/saga/sagaAccount/typeAccountSaga";
import {
  addTL,
  updateTL,
} from "../../../features/saga/sagaTheLoai/typeTheLoaiSaga";
const mapStateToProps = (state, ownProps) => {
  const listDM = state.danhMuc.listDanhMuc;
  return { listDM };
};

const mapDispatchToProps = (dispatch) => ({
  addTL: (data) => dispatch(addTL(data)),
  updateTL: (data) => dispatch(updateTL(data)),
});

const TheLoaiContainer = connect(mapStateToProps, mapDispatchToProps)(TheLoai);

export default TheLoaiContainer;
