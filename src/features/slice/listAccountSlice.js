import { createSlice } from "@reduxjs/toolkit";
import { List } from "immutable";
const initialState = {
  list: List([]),
};
const listAccount = createSlice({
  name: "listAccount",
  initialState,
  reducers: {
    getListAC: (state, action) => {
      const new_List = List(action.payload);
      return {
        ...state,
        list: new_List,
      };
    },
  },
});

const { reducer, actions } = listAccount;
export const {
  //   addTodoRD,
  //   removeTodoRD,
  getListAC,
  //   activeTodo,
  //   editTodo,
  //   checkALL,
} = actions;
export const actionsCheck = listAccount.actions;
export default reducer;
