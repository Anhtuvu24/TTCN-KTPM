import { createSlice } from "@reduxjs/toolkit";

const theLoai = createSlice({
  name: "theLoai",
  initialState: {
    listTheLoai: [],
    currentTheLoaiMessage: null,
  },
  reducers: {
    clearTheLoaiMessage: (state, action) => {
      return {
        ...state,
        currentTheLoaiMessage: null,
      };
    },
    updateTheLoai: (state, action) => {
      return {
        currentTheLoaiMessage: {
          messageAlert: "Cập nhật thành công",
          type: "success",
        },
      };
    },
    getListTheLoai: (state, action) => {
      const newList = action.payload.data.result.content;
      return {
        ...state,
        listTheLoai: newList,
      };
    },
    deleteTheLoai: (state, action) => {
      if (action.payload.message.success) {
        const newList = state.listTheLoai.filter((item) => {
          return item.id !== action.payload.id;
        });
        return {
          ...state,
          listTheLoai: newList,
          currentTheLoaiMessage: {
            message: "Xóa thể loại thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentTheLoaiMessage: {
          message: "Xóa thể loại không thành công",
          type: "erroe",
        },
      };
    },
    addTheLoai: (state, action) => {
      if (action.payload.data.success) {
        const item = {
          id: action.payload.data.result.id,
          tenTheLoai: action.payload.data.result.tenTheLoai,
          maDanhMuc: action.payload.data.result.maDanhMuc,
        };
        const newList = [...state.listTheLoai, item];
        return {
          ...state,
          listTheLoai: newList,
          currentTheLoaiMessage: {
            message: "Thêm thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentTheLoaiMessage: {
          message: "Thêm thất bại",
          type: "error",
        },
      };
    },
    updateTL: (state, action) => {
      if (action.payload.data.success) {
        const newList = [...state.listTheLoai];
        const index = newList.findIndex(
          (item) => item.id === action.payload.data.result.id
        );
        const updateInfor = action.payload.data.result;
        if (index !== -1) {
          newList[index] = {
            id: updateInfor.id,
            tenTheLoai: updateInfor.tenTheLoai,
            matheLoai: updateInfor.matheLoai,
          };
        }
        return {
          ...state,
          listTheLoai: newList,
          currentTheLoaiMessage: {
            message: "Cập nhật thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentTheLoaiMessage: {
          message: "Cập nhật không thành công",
          type: "error",
        },
      };
    },
  },
});

const { reducer, actions } = theLoai;
export const {
  clearTheLoaiMessage,
  updateTheLoai,
  getListTheLoai,
  deleteTheLoai,
  addTheLoai,
  updateTL,
} = actions;
export default reducer;
