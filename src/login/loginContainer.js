import { connect } from "react-redux";
import { createSelector } from "reselect";
import { login } from "../features/saga/sagaAccount/typeAccountSaga";
import Login from "./login";

const mapStateToProps = (state, ownProps) => {
  const userLogin = state.user.currentUser;

  return {
    userLogin,
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
  login: (input) => dispatch(login(input)),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
