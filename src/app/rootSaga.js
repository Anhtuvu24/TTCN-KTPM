import { all } from "redux-saga/effects";
import { sgWatchGetList } from "../features/saga/sagaAccount/watcher/watcher";
export default function* rootSaga() {
  yield all([
    sgWatchGetList(),
    // sgWatchAddTodo(),
    // sgWatchRemoveTodo(),
    // sgWatchActiveTodo(),
    // sgWatchCheckAll(),
    // sgWatchEditTodo(),
  ]);
}
