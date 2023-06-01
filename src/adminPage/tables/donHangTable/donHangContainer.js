import { connect } from "react-redux";
import { createSelector } from "reselect";
import DonHang from "./donHang";
import { updateUserOnTable } from "../../../features/saga/sagaAccount/typeAccountSaga";
import { updateDH } from "../../../features/saga/sagaDonHang/typeDonHangSaga";
const mapStateToProps = (state, ownProps) => {
  const listDM = state.danhMuc.listDanhMuc;
  return { listDM };
};

const mapDispatchToProps = (dispatch) => ({
  updateDH: (data) => dispatch(updateDH(data)),
});

const DonHangContainer = connect(mapStateToProps, mapDispatchToProps)(DonHang);

export default DonHangContainer;
