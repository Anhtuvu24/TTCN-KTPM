import { connect } from "react-redux";
import { createSelector } from "reselect";
import AccountAbout from "./account";
import { updateUserOnTable } from "../../../features/saga/sagaAccount/typeAccountSaga";
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  updateUserOnTable: (input) => dispatch(updateUserOnTable(input)),
});

const AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountAbout);

export default AccountContainer;
