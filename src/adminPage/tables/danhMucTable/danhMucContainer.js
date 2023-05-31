import { connect } from "react-redux";
import { createSelector } from "reselect";
import DanhMuc from "./danhMuc";
import { updateUserOnTable } from "../../../features/saga/sagaAccount/typeAccountSaga";
import {
  addDM,
  updateDM,
} from "../../../features/saga/sagaDanhMuc/typeDanhMucSaga";
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addDM: (data) => dispatch(addDM(data)),
  updateDM: (data) => dispatch(updateDM(data)),
});

const DanhMucContainer = connect(mapStateToProps, mapDispatchToProps)(DanhMuc);

export default DanhMucContainer;
