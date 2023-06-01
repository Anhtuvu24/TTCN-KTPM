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
  sgAddDonHang,
  sgGetListDH,
  sgDeleteDonHang,
  sgUpdateDonHang,
} from "../worker/worker";
function* sgWatchGetListDH() {
  yield takeEvery("GET_LIST_DH", sgGetListDH);
}

function* sgWatchDeleteDH() {
  yield takeEvery("DELETE_DH", sgDeleteDonHang);
}

function* sgWatchAddDH() {
  yield takeEvery("ADD_DH", sgAddDonHang);
}

function* sgWatchUpdateDH() {
  yield takeEvery("UPDATE_DH", sgUpdateDonHang);
}
export { sgWatchAddDH, sgWatchGetListDH, sgWatchDeleteDH, sgWatchUpdateDH };

//saga getlist
