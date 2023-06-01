import { createSlice } from "@reduxjs/toolkit";

const danhMuc = createSlice({
  name: "danhMuc",
  initialState: {
    listDanhMuc: [],
    currentDanhMucMessage: null,
  },
  reducers: {
    clearDanhMucMessage: (state, action) => {
      return {
        ...state,
        currentDanhMucMessage: null,
      };
    },
    updateDanhMuc: (state, action) => {
      return {
        currentDanhMucMessage: {
          messageAlert: "Cập nhật thành công",
          type: "success",
        },
      };
    },
    getListDanhMuc: (state, action) => {
      const newList = action.payload.data.result.content;
      return {
        ...state,
        listDanhMuc: newList,
      };
    },
    deleteDanhMuc: (state, action) => {
      if (action.payload.message.success) {
        const newList = state.listDanhMuc.filter((item) => {
          return item.id !== action.payload.id;
        });
        return {
          ...state,
          listDanhMuc: newList,
          currentDanhMucMessage: {
            message: "Xóa danh mục thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentDanhMucMessage: {
          message: "Xóa danh mục không thành công",
          type: "erroe",
        },
      };
    },
    addDanhMuc: (state, action) => {
      if (action.payload.data.success) {
        const item = {
          id: action.payload.data.result.id,
          tenDanhMuc: action.payload.data.result.tenDanhMuc,
        };
        const newList = [...state.listDanhMuc, item];
        return {
          ...state,
          listDanhMuc: newList,
          currentDanhMucMessage: {
            message: "Thêm thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentDanhMucMessage: {
          message: "Thêm thất bại",
          type: "error",
        },
      };
    },
    updateDM: (state, action) => {
      if (action.payload.data.success) {
        const newList = [...state.listDanhMuc];
        const index = newList.findIndex(
          (item) => item.id === action.payload.data.result.id
        );
        const updateInfor = action.payload.data.result;
        if (index !== -1) {
          newList[index] = {
            id: updateInfor.id,
            tenDanhMuc: updateInfor.tenDanhMuc,
          };
        }
        return {
          ...state,
          listDanhMuc: newList,
          currentDanhMucMessage: {
            message: "Cập nhật thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentDanhMucMessage: {
          message: "Cập nhật không thành công",
          type: "error",
        },
      };
    },
  },
});

const { reducer, actions } = danhMuc;
export const {
  clearDanhMucMessage,
  updateDanhMuc,
  getListDanhMuc,
  deleteDanhMuc,
  addDanhMuc,
  updateDM,
} = actions;
export default reducer;
