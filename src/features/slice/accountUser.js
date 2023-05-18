import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutSucess: (state, action) => {
      state.currentUser = null;
    },
  },
});

const { reducer, actions } = userSlice;
export const { loginSuccess, logoutSucess } = actions;
export const actionsCheck = userSlice.actions;
export default reducer;
