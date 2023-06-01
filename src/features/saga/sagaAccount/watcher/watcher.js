import {
  call,
  put,
  take,
  takeEvery,
  fork,
  select,
  delay,
  takeLatest,
  apply,
  actionChannel,
} from "redux-saga/effects";
import {
  sgLogin,
  sgUpdateUser,
  sgRegister,
  sgGetListAccount,
  sgDeleteAccount,
  sgUpdateUserOnTable,
} from "../worker/worker";

//saga getlist

function* sgWatchGetList() {
  yield takeEvery("GET_LIST_ACCOUNT", sgGetListAccount);
}

function* sgWatchLogin() {
  yield takeEvery("LOGIN", sgLogin);
}

function* sgWatchUpdateUser() {
  yield takeEvery("UPDATE_USER", sgUpdateUser);
}

function* sgWatcheRegister() {
  yield takeEvery("REGISTER", sgRegister);
}

function* sgWatchDeleteAccount() {
  yield takeEvery("DELETE_USER", sgDeleteAccount);
}

function* sgWatchUpdateUserOnTable() {
  yield takeEvery("UPDATE_USER_ON_TABLE", sgUpdateUserOnTable);
}

export {
  sgWatchGetList,
  sgWatchLogin,
  sgWatchUpdateUser,
  sgWatcheRegister,
  sgWatchDeleteAccount,
  sgWatchUpdateUserOnTable,
};
