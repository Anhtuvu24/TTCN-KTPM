import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import reducerAccount from "../features/slice/listAccountSlice";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  listAccount: reducerAccount,
});
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
