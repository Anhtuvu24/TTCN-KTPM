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
  sgDeleteDM,
  sgAddDanhMuc,
  sgUpdateDanhMuc,
} from "../worker/worker";

function* sgWatchGetListDM() {
  yield takeEvery("GET_LIST_DM", sgGetListDM);
}

function* sgWatchDeleteDM() {
  yield takeEvery("DELETE_DM", sgDeleteDM);
}

function* sgWatchAddDM() {
  yield takeEvery("ADD_DM", sgAddDanhMuc);
}

function* sgWatchUpdateDM() {
  yield takeEvery("UPDATE_DM", sgUpdateDanhMuc);
}
export { sgWatchGetListDM, sgWatchDeleteDM, sgWatchAddDM, sgWatchUpdateDM };

//saga getlist
