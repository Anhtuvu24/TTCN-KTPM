import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    listAccount: [],
    currentUser: null,
    currentMessage: null,
  },
  reducers: {
    clearMessage: (state, action) => {
      return {
        ...state,
        currentMessage: null,
      };
    },
    loginSuccess: (state, action) => {
      const {
        id,
        hoTen,
        tenDangNhap,
        matKhau,
        quyen,
        diaChi,
        gioiTinh,
        ngaySinh,
        soDienThoai,
      } = action.payload;
      const user = {
        id: id,
        username: tenDangNhap,
        fullName: hoTen,
        password: matKhau,
        address: diaChi,
        phone: soDienThoai,
        date: ngaySinh,
        sex: gioiTinh,
        permission: quyen,
      };
      state.currentUser = user;
    },
    logoutSucess: (state, action) => {
      return {
        currentUser: null,
        currentMessage: null,
      };
    },
    updateUser: (state, action) => {
      const {
        id,
        hoTen,
        tenDangNhap,
        matKhau,
        quyen,
        diaChi,
        gioiTinh,
        ngaySinh,
        soDienThoai,
      } = action.payload.data.result;
      const user = {
        id: id,
        username: tenDangNhap,
        fullName: hoTen,
        password: matKhau,
        address: diaChi,
        phone: soDienThoai,
        date: ngaySinh,
        sex: gioiTinh,
        permission: quyen,
      };
      return {
        currentUser: user,
        currentMessage: {
          messageAlert: "Cập nhật thông tin thành công",
          type: "success",
        },
      };
    },
    updateUserFailure: (state, action) => {
      const message = action.payload.data.success;
      return {
        ...state,
        currentMessage: {
          messageAlert: message,
          type: "error",
        },
      };
    },
    registerSuccess: (state, action) => {
      const {
        id,
        hoTen,
        tenDangNhap,
        matKhau,
        quyen,
        diaChi,
        gioiTinh,
        ngaySinh,
        soDienThoai,
      } = action.payload.data.result;
      const user = {
        id: id,
        username: tenDangNhap,
        fullName: hoTen,
        password: matKhau,
        address: diaChi,
        phone: soDienThoai,
        date: ngaySinh,
        sex: gioiTinh,
        permission: quyen,
      };
      return {
        currentUser: user,
        currentMessage: {
          messageAlert: "Đăng ký thành công",
          type: "success",
        },
      };
    },
    registerFailure: (state, action) => {
      const message = action.payload.data.result;
      return {
        ...state,
        currentMessage: {
          messageAlert: message,
          type: "error",
        },
      };
    },
    getListAccounts: (state, action) => {
      const newList = action.payload.data.result.content;
      return {
        ...state,
        listAccount: newList,
      };
    },
    deleteUser: (state, action) => {
      const newList = state.listAccount.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        listAccount: newList,
        currentMessage: {
          message: action.payload.res.data.result,
          type: action.payload.res.data.success ? "success" : "error",
        },
      };
    },
    updateUserOnTable: (state, action) => {
      if (action.payload.data.success) {
        const newList = [...state.listAccount];
        const index = newList.findIndex(
          (item) => item.id === action.payload.id
        );
        const updateInfor = action.payload.data.result;
        if (index !== -1) {
          newList[index] = {
            id: updateInfor.id,
            tenDangNhap: updateInfor.tenDangNhap,
            matKhau: updateInfor.matKhau,
            hoTen: updateInfor.hoTen,
            soDienThoai: updateInfor.soDienThoai,
            gioiTinh: updateInfor.gioiTinh,
            ngaySinh: updateInfor.ngaySinh,
            diaChi: updateInfor.diaChi,
          };
        }
        return {
          ...state,
          listAccount: newList,
          currentMessage: {
            message: "Cập nhật thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentMessage: {
          message: "Cập nhật không thành công",
          type: "error",
        },
      };
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  loginSuccess,
  logoutSucess,
  updateUser,
  updateUserFailure,
  registerSuccess,
  registerFailure,
  clearMessage,
  getListAccounts,
  deleteUser,
  updateUserOnTable,
} = actions;
export const actionsCheck = userSlice.actions;
export default reducer;
