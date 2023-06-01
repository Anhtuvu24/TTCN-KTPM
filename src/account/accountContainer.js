import { connect } from "react-redux";
import { createSelector } from "reselect";
import AccountAbout from "./account";
import { updateUser } from "../features/saga/sagaAccount/typeAccountSaga";
const mapStateToProps = (state, ownProps) => {
  const userLogin = state.user.currentUser;
  const messageAlert = state.user.currentMessage;

  return {
    userLogin,
    messageAlert,
    // getListActive: getListActive(todoListRD),
    // getListComplete: getListComplete(todoListRD),
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (input) => dispatch(updateUser(input)),
});

const AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountAbout);

export default AccountContainer;
