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
  addDonHang,
  getListDonHang,
  deleteDonHang,
  updateDonHang,
} from "../../../slice/donHang";

export function* sgGetListDH() {
  const res = yield instance.get(`donhang/get/page`);
  const dh = [];
  for (let i = 0; i < res.data.result.content.length; ++i) {
    const maDonHang = res.data.result.content[i].id;
    const listSP = yield instance.get(`don-hang-san-pham/get/${maDonHang}`);
    const final = {
      maDonHang: res.data.result.content[i].id,
      trangThai: res.data.result.content[i].trangThai,
      ngayMua: res.data.result.content[i].createdDate,
      listSP: listSP.data.result,
      diaChi: res.data.result.content[i].diaChi,
      nguoiMua: res.data.result.content[i].maNguoiDung,
    };
    dh.push(final);
  }
  yield put(getListDonHang(dh));
}

export function* sgDeleteDonHang(payload) {
  const id = payload.payload;
  const res = yield instance.delete(`donhang/del/${id}`);
  const data = {
    id: id,
    message: res.data,
  };
  yield put(deleteDonHang(data));
}

export function* sgAddDonHang(payload) {
  const cart = payload.payload.cart;
  const data = {
    diaChi: payload.payload.diaChi,
    trangThai: payload.payload.trangThai,
    maNguoiDung: payload.payload.maNguoiDung,
  };
  const res = yield instance.post(`donhang/post`, data);
  for (let i = 0; i < cart.length; ++i) {
    const { number, id, color, price, size } = cart[i];
    const dataItem = {
      maDonHang: res.data.result.id,
      maSanPham: id,
      soLuong: number,
      mauSac: color,
      giaBan: price,
      kichCo: size,
    };
    const resa = yield instance.post(`don-hang-san-pham/post`, dataItem);
  }
  const listSP = yield instance.get(
    `don-hang-san-pham/get/${res.data.result.id}`
  );
  const final = {
    maDonHang: res.data.result.id,
    trangThai: res.data.result.trangThai,
    ngayMua: res.data.result.createdDate,
    listSP: listSP.data.result,
    diaChi: res.data.result.diaChi,
    nguoiMua: payload.payload.maNguoiDung,
  };
  yield put(addDonHang(final));
}

export function* sgUpdateDonHang(payload) {
  const id = payload.payload.updateInforData.id;
  const dataUpdate = {
    id: payload.payload.updateInforData.id,
    trangThai: payload.payload.updateInforData.trangThai,
    maNguoiDung: payload.payload.updateInforData.nguoiMua,
    diaChi: payload.payload.updateInforData.diaChi,
  };
  const res = yield instance.put(`donhang/put/${id}`, dataUpdate);
  const listSP = yield instance.get(`don-hang-san-pham/get/${id}`);
  const final = {
    id: res.data.result.id,
    trangThai: res.data.result.trangThai,
    ngayMua: res.data.result.createdDate,
    listSP: listSP.data.result,
    diaChi: res.data.result.diaChi,
    nguoiMua: payload.payload.updateInforData.nguoiMua,
  };
  yield put(updateDonHang(final));
}
