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
  clearDanhMucMessage,
  updateDanhMuc,
  getListDanhMuc,
  deleteDanhMuc,
  addDanhMuc,
  updateDM,
} from "../../../slice/danhMuc";

export function* sgGetListDM() {
  const res = yield instance.get(`danhmuc/get/page`);
  yield put(getListDanhMuc(res));
}

export function* sgDeleteDM(payload) {
  const id = payload.payload;
  const res = yield instance.delete(`danhmuc/del/${id}`);
  const data = {
    id: id,
    message: res.data,
  };
  yield put(deleteDanhMuc(data));
}

export function* sgAddDanhMuc(payload) {
  const data = {
    tenDanhMuc: payload.payload,
  };
  const res = yield instance.post(`danhmuc/post`, data);
  yield put(addDanhMuc(res));
}

export function* sgUpdateDanhMuc(payload) {
  const id = payload.payload.id;
  const data = {
    id: id,
    tenDanhMuc: payload.payload.updateInforData.tenDanhMuc,
  };
  const res = yield instance.put(`danhmuc/put/${id}`, data);
  yield put(updateDM(res));
}
