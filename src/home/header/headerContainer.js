import { connect } from "react-redux";
import { createSelector } from "reselect";
// import { getListAccount } from "../features/saga/sagaAccount/typeAccountSaga";
import Header from "./header";

const mapStateToProps = (state, ownProps) => {
  const userLogin = state.user.currentUser;
  const onVisible = ownProps.onVisible;
  // debugger;
  return {
    userLogin,
    onVisible,
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
