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
  loginSuccess,
  logoutSucess,
  updateUser,
  updateUserFailure,
  registerSuccess,
  registerFailure,
  clearMessage,
  getListAccounts,
  deleteUser,
  updateUserOnTable,
} from "../../../slice/accountUser";

export function* sgLogin(payload) {
  const res = yield instance.post(
    `nguoidung/login/${payload.payload.username}/${payload.payload.password}`
  );
  yield put(loginSuccess(res.data.result));
}

export function* sgUpdateUser(payload) {
  const id = payload.payload.id;
  const data = payload.payload.updateInforData;
  const gioiTinh = data.sex === "Nam" ? 0 : 1;
  const dataUpdate = {
    id: id,
    tenDangNhap: data.userName,
    matKhau: data.password,
    hoTen: data.fullName,
    soDienThoai: data.phone,
    gioiTinh: gioiTinh,
    ngaySinh: data.date,
    diaChi: data.address,
    quyen: data.permission, // VAT: chi ben admin
  };
  const res = yield instance.put(`nguoidung/put/${id}`, dataUpdate);
  if (res.data.success === false) {
    yield put(updateUserFailure(res));
  } else {
    yield put(updateUser(res));
  }
}

export function* sgRegister(payload) {
  const data = payload.payload;
  const res = yield instance.post(`nguoidung/post`, data);
  const status = res.data.success;
  if (status) {
    yield put(registerSuccess(res));
  } else {
    yield put(registerFailure(res));
  }
}

export function* sgGetListAccount(payload) {
  const res = yield instance.get(`nguoidung/get/page`);
  yield put(getListAccounts(res));
}

export function* sgDeleteAccount(payload) {
  const id = payload.payload;
  const res = yield instance.delete(`nguoidung/del/${id}`);
  const data = {
    id: id,
    res: res,
  };
  yield put(deleteUser(data));
}

export function* sgUpdateUserOnTable(payload) {
  const id = payload.payload.id;
  const updateData = payload.payload.updateInforData;
  const data = {
    id: id,
    tenDangNhap: updateData.userName,
    matKhau: updateData.password,
    hoTen: updateData.fullName,
    soDienThoai: updateData.phone,
    gioiTinh: updateData.sex === "Nam" ? 0 : 1,
    ngaySinh: updateData.date,
    diaChi: updateData.address,
  };
  const res = yield instance.put(`nguoidung/put/${id}`, data);
  yield put(updateUserOnTable(res));
}
