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
  getListProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../../slice/product";
import item1 from "../../../../itemImg/item1.jpg";

export function* sgGetListProduct() {
  const res = yield instance.get(`sanpham/get/page?page=0&size=1000`);
  yield put(getListProduct(res));
}

export function* sgDeletePD(payload) {
  const id = payload.payload;
  const res = yield instance.delete(`sanpham/del/${id}`);
  const data = {
    id: id,
    message: res.data,
  };
  yield put(deleteProduct(data));
}

export function* sgAddProduct(payload) {
  const resImg = yield instance.post(`upload`, payload.payload.imgSend);
  const data = {
    tenSanPham: payload.payload.tenSanPham,
    giaBan: payload.payload.giaBan,
    nhaCungCap: payload.payload.nhaCungCap,
    xuatXu: payload.payload.xuatXu,
    kichCo: payload.payload.kichCo,
    maTheLoai: payload.payload.maTheLoai,
    trongLuong: payload.payload.trongLuong,
    mauSac: payload.payload.mauSac,
    tenAnh: resImg.data[1],
  };
  const res = yield instance.post(`sanpham/post`, data);
  yield put(addProduct(res));
}

export function* sgUpdateProduct(payload) {
  const id = payload.payload.id;
  const resImg = yield instance.post(
    `upload`,
    payload.payload.updateInforData.imgSend
  );
  const data = {
    id: id,
    tenSanPham: payload.payload.updateInforData.tenSanPham,
    giaBan: payload.payload.updateInforData.giaBan,
    nhaCungCap: payload.payload.updateInforData.nhaCungCap,
    xuatXu: payload.payload.updateInforData.xuatXu,
    kichCo: payload.payload.updateInforData.kichCo,
    maTheLoai: payload.payload.updateInforData.maTheLoai,
    trongLuong: payload.payload.updateInforData.trongLuong,
    mauSac: payload.payload.updateInforData.mauSac,
    tenAnh: resImg.data[1],
  };
  const res = yield instance.put(`sanpham/put/${id}`, data);
  yield put(updateProduct(res));
}
