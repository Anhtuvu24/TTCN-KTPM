import { createSlice } from "@reduxjs/toolkit";
import { List } from "immutable";
const initialState = {
  list: List([]),
};
const listAccount = createSlice({
  name: "listAccount",
  initialState,
  reducers: {
    // addTodoRD: (state, action) => {
    //   const { id, name, isCompleted } = action.payload.payload;
    //   const newTodo = {
    //     id,
    //     name,
    //     isCompleted,
    //   };
    //   const new_List = state.list.push(newTodo);
    //   return {
    //     ...state,
    //     list: new_List,
    //   };
    // },
    // removeTodoRD: (state, action) => {
    //   const new_List = state.list.delete(action.payload);
    //   return {
    //     ...state,
    //     list: new_List,
    //   };
    // },
    getListAC: (state, action) => {
      // debugger;
      const new_List = List(action.payload);
      return {
        ...state,
        list: new_List,
      };
    },
    // activeTodo: (state, action) => {
    //   const new_List = state.list.setIn(
    //     [action.payload.index, "isCompleted"],
    //     action.payload.statusTodo
    //   );
    //   debugger;
    //   return {
    //     ...state,
    //     list: new_List,
    //   };
    // },
    // editTodo: (state, action) => {
    //   debugger;
    //   const new_List = state.list.setIn(
    //     [action.payload.index, "name"],
    //     action.payload.name
    //   );
    //   debugger;
    //   console.log(new_List);
    //   debugger;
    //   return {
    //     ...state,
    //     list: new_List,
    //   };
    // },
    // checkALL: (state, action) => {
    //   console.log(state.list);
    //   const new_List = [...state.list];
    //   new_List.map((todo) => {
    //     todo.isCompleted = action.payload;
    //   });
    //   return {
    //     ...state,
    //     list: List(new_List),
    //   };
    // },
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
