import React from "react";
import { connect } from "react-redux";
import ItemProduct from "./item";
import { createSelector } from "reselect";
// import { getListAccount } from "../features/saga/sagaAccount/typeAccountSaga";

const mapStateToProps = (state, ownProps) => {
  const cart = state.cart.currentListCart;
  return {
    cart,
  };
};

const ItemProductContainer = connect(mapStateToProps)(ItemProduct);

export default ItemProductContainer;
