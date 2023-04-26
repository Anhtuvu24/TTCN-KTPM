import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getListAccount } from "../features/saga/sagaAccount/typeAccountSaga";
import Login from "./login";

const mapStateToProps = (state, ownProps) => {
  const listAccount = state.listAccount.list;
  return {
    listAccount,
    // getListActive: getListActive(todoListRD),
    // getListComplete: getListComplete(todoListRD),
  };
};

const getListSelector = (state) => state;
// const getListActive = createSelector(getListSelector, (state) => {
//   const activeList = state.filter((todo) => {
//     return todo.isCompleted === true;
//   });
//   return activeList;
// });

// const getListComplete = createSelector(getListSelector, (state) => {
//   const activeList = state.filter((todo) => {
//     return todo.isCompleted === false;
//   });
//   return activeList;
// });

const mapDispatchToProps = (dispatch) => ({
  getListAccount: () => dispatch(getListAccount()),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
