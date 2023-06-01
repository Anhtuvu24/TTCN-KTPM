import { connect } from "react-redux";
import { createSelector } from "reselect";
// import { getListAccount } from "../features/saga/sagaAccount/typeAccountSaga";
import Home from "./home";

const mapStateToProps = (state, ownProps) => {
  const userLogin = state.user.currentUser;
  return {
    userLogin,
  };
};

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
