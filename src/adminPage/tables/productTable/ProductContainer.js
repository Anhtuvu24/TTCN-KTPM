import { connect } from "react-redux";
import { createSelector } from "reselect";
import Product from "./product";
import { updateUserOnTable } from "../../../features/saga/sagaAccount/typeAccountSaga";
import {
  addPD,
  updatePD,
} from "../../../features/saga/sagaProduct/typeProduct";
const mapStateToProps = (state, ownProps) => {
  const listTheLoai = state.theLoai.listTheLoai;
  const listDanhMuc = state.danhMuc.listDanhMuc;
  return {
    listTheLoai,
    listDanhMuc,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPD: (data) => dispatch(addPD(data)),
  updatePD: (data) => dispatch(updatePD(data)),
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);

export default ProductContainer;
