import { connect } from "react-redux";
import { getListPD } from "../../features/saga/sagaProduct/typeProduct";
import { getListDM } from "../../features/saga/sagaDanhMuc/typeDanhMucSaga";
import Content from "./content";
const mapStateToProps = (state, ownProps) => {
  // const listTL = state.theLoai.listTheLoai;
  const messageStatus = state.product.currentProductMessage;
  const listProduct = state.product.listProduct;
  const listDM = state.danhMuc.listDanhMuc;
  return { messageStatus, listProduct, listDM };
};

const mapDispatchToProps = (dispatch) => ({
  getListPD: () => dispatch(getListPD()),
  getListDM: () => dispatch(getListDM()),
});

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
