import { connect } from "react-redux";
import { createSelector } from "reselect";
// import { getListAccount } from "../features/saga/sagaAccount/typeAccountSaga";
import Cart from "./cart";

const mapStateToProps = (state, ownProps) => {
  const userLogin = state.user.currentUser;
  const cart = state.cart.currentListCart;
  const messageDHStatus = state.donHang.currentDonHangMessage;
  return {
    userLogin,
    cart,
    messageDHStatus,
  };
};

const CartContainer = connect(mapStateToProps)(Cart);

export default CartContainer;
