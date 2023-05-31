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
  sgGetListDM,
  sgAddTheLoai,
  sgDeleteTheLoai,
  sgUpdateTheLoai,
} from "../worker/worker";

function* sgWatchGetListTL() {
  yield takeEvery("GET_LIST_TL", sgGetListDM);
}

function* sgWatchDeleteTL() {
  yield takeEvery("DELETE_TL", sgDeleteTheLoai);
}

function* sgWatchAddTL() {
  yield takeEvery("ADD_TL", sgAddTheLoai);
}

function* sgWatchUpdateTL() {
  yield takeEvery("UPDATE_TL", sgUpdateTheLoai);
}
export { sgWatchGetListTL, sgWatchAddTL, sgWatchDeleteTL, sgWatchUpdateTL };

//saga getlist
