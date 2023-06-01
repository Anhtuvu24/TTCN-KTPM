import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    currentListCart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const index = state.currentListCart.findIndex((item) => {
        return (
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size &&
          item.tenAnh === action.payload.tenAnh
        );
      });
      if (index >= 0) {
        state.currentListCart[index].number += action.payload.number;
      } else {
        state.currentListCart.push(action.payload);
      }
    },
    removeOneProduct: (state, action) => {
      const index = state.currentListCart.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      if (index >= 0 && state.currentListCart[index].number > 1) {
        state.currentListCart[index].number -= 1;
      } else {
        state.currentListCart.splice(index, 1);
      }
    },
    removeProduct: (state, action) => {
      const index = state.currentListCart.findIndex(
        (item) => item.id === action.payload
      );
      state.currentListCart.splice(index, 1);
    },
    clearCart: (state, action) => {
      state.currentListCart = [];
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addProduct, clearCart, removeOneProduct, removeProduct } =
  actions;
export const actionsCheck = cartSlice.actions;
export default reducer;
