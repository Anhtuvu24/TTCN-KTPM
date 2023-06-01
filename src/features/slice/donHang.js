import { createSlice } from "@reduxjs/toolkit";

const donHang = createSlice({
  name: "donHang",
  initialState: {
    listDonHang: [],
    currentDonHangMessage: null,
  },
  reducers: {
    clearDonHangMessage: (state, action) => {
      return {
        ...state,
        currentDonHangMessage: null,
      };
    },
    updateDonHang: (state, action) => {
      if (action.payload.id) {
        const newList = [...state.listDonHang];
        const index = newList.findIndex(
          (item) => item.maDonHang === action.payload.id
        );
        const updateInfor = action.payload;
        if (index !== -1) {
          newList[index] = {
            maDonHang: updateInfor.id,
            ngayMua: updateInfor.ngayMua,
            trangThai: updateInfor.trangThai,
            listSP: updateInfor.listSP,
            nguoiMua: updateInfor.nguoiMua,
            diaChi: updateInfor.diaChi,
          };
        }
        return {
          ...state,
          listDonHang: newList,
          currentDonHangMessage: {
            message: "Cập nhật thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentDonHangMessage: {
          message: "Cập nhật không thành công",
          type: "error",
        },
      };
    },
    getListDonHang: (state, action) => {
      const newList = action.payload;
      return {
        ...state,
        listDonHang: newList,
      };
    },
    deleteDonHang: (state, action) => {
      if (action.payload.message.success) {
        const newList = state.listDonHang.filter((item) => {
          return item.maDonHang !== action.payload.id;
        });
        return {
          ...state,
          listDonHang: newList,
          currentDonHangMessage: {
            message: "Xóa đơn hàng thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentDonHangMessage: {
          message: "Xóa thể loại không thành công",
          type: "erroe",
        },
      };
    },
    addDonHang: (state, action) => {
      if (action.payload.maDonHang) {
        const item = {
          maDonHang: action.payload.maDonHang,
          ngayMua: action.payload.ngayMua,
          trangThai: action.payload.trangThai,
          listSP: action.payload.listSP,
          nguoiMua: action.payload.nguoiMua,
          diaChi: action.payload.dia,
        };
        const newList = [...state.listDonHang, item];
        return {
          ...state,
          listDonHang: newList,
          currentDonHangMessage: {
            message: "Đặt hàng thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentDonHangMessage: {
          message: "Đặt hàng thất bại",
          type: "error",
        },
      };
    },
    updateDH: (state, action) => {
      if (action.payload.id) {
        const newList = [...state.listDonHang];
        const index = newList.findIndex(
          (item) => item.maDonHang === action.payload.id
        );
        const updateInfor = action.payload.data.result;
        if (index !== -1) {
          newList[index] = {
            id: updateInfor.id,
            tenDonHang: updateInfor.tenDonHang,
            maDonHang: updateInfor.maDonHang,
          };
        }
        return {
          ...state,
          listDonHang: newList,
          currentDonHangMessage: {
            message: "Cập nhật thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentDonHangMessage: {
          message: "Cập nhật không thành công",
          type: "error",
        },
      };
    },
  },
});

const { reducer, actions } = donHang;
export const {
  clearDonHangMessage,
  updateDonHang,
  getListDonHang,
  deleteDonHang,
  addDonHang,
  updateTL,
} = actions;
export default reducer;
