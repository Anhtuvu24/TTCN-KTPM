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
  sgGetListProduct,
  sgAddProduct,
  sgUpdateProduct,
  sgDeletePD,
} from "../worker/worker";

function* sgWatchGetListPD() {
  yield takeEvery("GET_LIST_PD", sgGetListProduct);
}

function* sgWatchDeletePD() {
  yield takeEvery("DELETE_PD", sgDeletePD);
}

function* sgWatchAddPD() {
  yield takeEvery("ADD_PD", sgAddProduct);
}

function* sgWatchUpdatePD() {
  yield takeEvery("UPDATE_PD", sgUpdateProduct);
}
export { sgWatchGetListPD, sgWatchAddPD, sgWatchUpdatePD, sgWatchDeletePD };

//saga getlist
