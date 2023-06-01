import { all } from "redux-saga/effects";
import {
  sgWatchGetList,
  sgWatchLogin,
  sgWatchUpdateUser,
  sgWatcheRegister,
  sgWatchDeleteAccount,
  sgWatchUpdateUserOnTable,
} from "../features/saga/sagaAccount/watcher/watcher";

import {
  sgWatchGetListDM,
  sgWatchDeleteDM,
  sgWatchAddDM,
  sgWatchUpdateDM,
} from "../features/saga/sagaDanhMuc/watcher/watcher";

import {
  sgWatchGetListTL,
  sgWatchAddTL,
  sgWatchDeleteTL,
  sgWatchUpdateTL,
} from "../features/saga/sagaTheLoai/watcher/watcher";

import {
  sgWatchGetListPD,
  sgWatchAddPD,
  sgWatchUpdatePD,
  sgWatchDeletePD,
} from "../features/saga/sagaProduct/watcher/watcher";

import {
  sgWatchAddDH,
  sgWatchGetListDH,
  sgWatchDeleteDH,
  sgWatchUpdateDH,
} from "../features/saga/sagaDonHang/watcher/watcher";
export default function* rootSaga() {
  yield all([
    // saga user
    sgWatchGetList(),
    sgWatchLogin(),
    sgWatchUpdateUser(),
    sgWatcheRegister(),
    sgWatchDeleteAccount(),
    sgWatchUpdateUserOnTable(),

    //sg danhMuc
    sgWatchGetListDM(),
    sgWatchDeleteDM(),
    sgWatchAddDM(),
    sgWatchUpdateDM(),

    // sg TheLoai
    sgWatchGetListTL(),
    sgWatchAddTL(),
    sgWatchDeleteTL(),
    sgWatchUpdateTL(),

    // sg SanPham
    sgWatchGetListPD(),
    sgWatchAddPD(),
    sgWatchUpdatePD(),
    sgWatchDeletePD(),

    //dh
    sgWatchAddDH(),
    sgWatchGetListDH(),
    sgWatchDeleteDH(),
    sgWatchUpdateDH(),
  ]);
}
