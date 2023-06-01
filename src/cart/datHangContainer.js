import { connect } from "react-redux";
import { createSelector } from "reselect";
import DatHang from "./datHang";
// import { updateUserOnTable } from "../../../features/saga/sagaAccount/typeAccountSaga";
// import {
//   addDM,
//   updateDM,
// // } from "../../../features/saga/sagaDanhMuc/typeDanhMucSaga";
import { addDH } from "../features/saga/sagaDonHang/typeDonHangSaga";
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addDH: (data) => dispatch(addDH(data)),
});

const DatHangContainer = connect(mapStateToProps, mapDispatchToProps)(DatHang);

export default DatHangContainer;
