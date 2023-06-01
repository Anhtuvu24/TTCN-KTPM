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
import {
  getListTheLoai,
  addTheLoai,
  deleteTheLoai,
  updateTL,
} from "../../../slice/theLoai";

export function* sgGetListDM() {
  const res = yield instance.get(`theloai/get/page`);
  yield put(getListTheLoai(res));
}

export function* sgDeleteTheLoai(payload) {
  const id = payload.payload.id;
  const res = yield instance.delete(`theloai/del/${id}`);
  const data = {
    id: id,
    message: res.data,
  };
  yield put(deleteTheLoai(data));
}

export function* sgAddTheLoai(payload) {
  const data = {
    tenTheLoai: payload.payload.tenTheLoai,
    maDanhMuc: payload.payload.maDanhMuc,
  };
  const res = yield instance.post(`theloai/post`, data);
  yield put(addTheLoai(res));
}

export function* sgUpdateTheLoai(payload) {
  const id = payload.payload.id;
  const data = {
    id: id,
    tenTheLoai: payload.payload.updateInforData.tenTheLoai,
    maDanhMuc: payload.payload.updateInforData.maDanhMuc,
  };
  const res = yield instance.put(`theloai/put/${id}`, data);
  yield put(updateTL(res));
}
