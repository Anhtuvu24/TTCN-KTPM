import { connect } from "react-redux";
import { createSelector } from "reselect";
// import { getListAccount } from "../features/saga/sagaAccount/typeAccountSaga";
import Cart from "./cart";

const mapStateToProps = (state, ownProps) => {
  const userLogin = state.user.currentUser;
  const cart = state.cart.currentListCart;
  //   debugger;
  return {
    userLogin,
    cart,
  };
};

const CartContainer = connect(mapStateToProps)(Cart);

export default CartContainer;
