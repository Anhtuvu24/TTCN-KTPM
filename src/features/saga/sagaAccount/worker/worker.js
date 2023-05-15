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
import { instance } from "../../../../axios/axios";
import { getListAC } from "../../../slice/listAccountSlice";

export function* sgGetList() {
  const res = yield instance.get(`itemID`);
  // debugger;
  yield put(getListAC(res.data));
}
