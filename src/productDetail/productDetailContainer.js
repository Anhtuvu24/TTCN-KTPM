import { connect } from "react-redux";
import ProductDetail from "./productDetail";

const mapStateToProps = (state, ownProps) => {
  return {
    // getListActive: getListActive(todoListRD),
    // getListComplete: getListComplete(todoListRD),
  };
};
const mapDispatchToProps = (dispatch) => ({});

const ProductDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);

export default ProductDetailContainer;
