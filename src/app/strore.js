import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import reducerAccount from "../features/slice/listAccountSlice";
import reducerUser from "../features/slice/accountUser";
import reducerCart from "../features/slice/cart";
import reducerDanhMuc from "../features/slice/danhMuc";
import reducerTheLoai from "../features/slice/theLoai";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  listAccount: reducerAccount,
  user: reducerUser,
  cart: reducerCart,
  danhMuc: reducerDanhMuc,
  theLoai: reducerTheLoai,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store);
export default store;
