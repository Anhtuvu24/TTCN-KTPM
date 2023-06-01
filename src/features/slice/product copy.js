import { createSlice } from "@reduxjs/toolkit";

const Product = createSlice({
  name: "Product",
  initialState: {
    listProduct: [],
    currentProductMessage: null,
  },
  reducers: {
    clearProductMessage: (state, action) => {
      return {
        ...state,
        currentProductMessage: null,
      };
    },
    getListProduct: (state, action) => {
      const newList = action.payload.data.result.content;
      return {
        ...state,
        listProduct: newList,
      };
    },
    deleteProduct: (state, action) => {
      if (action.payload.message.success) {
        const newList = state.listProduct.filter((item) => {
          return item.id !== action.payload.id;
        });
        return {
          ...state,
          listProduct: newList,
          currentProductMessage: {
            message: "Xóa sản phẩm thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentProductMessage: {
          message: "Xóa sản phẩm không thành công",
          type: "erroe",
        },
      };
    },
    addProduct: (state, action) => {
      if (action.payload.data.success) {
        const item = {
          id: action.payload.data.result.id,
          tenSanPham: action.payload.data.result.tenSanPham,
          maTheLoai: action.payload.data.result.maTheLoai,
          giaBan: action.payload.data.result.giaBan,
          nhaCungCap: action.payload.data.result.nhaCungCap,
          xuatXu: action.payload.data.result.xuatXu,
          kichCo: action.payload.data.result.kichCo,
          trongLuong: action.payload.data.result.trongLuong,
          mauSac: action.payload.data.result.mauSac,
          tenAnh: action.payload.data.result.tenAnh,
        };
        const newList = [...state.listProduct, item];
        return {
          ...state,
          listProduct: newList,
          currentProductMessage: {
            message: "Thêm thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentProductMessage: {
          message: "Thêm thất bại",
          type: "error",
        },
      };
    },
    updateProduct: (state, action) => {
      if (action.payload.data.success) {
        const newList = [...state.listProduct];
        const index = newList.findIndex(
          (item) => item.id === action.payload.data.result.id
        );
        const updateInfor = action.payload.data.result;
        if (index !== -1) {
          newList[index] = {
            id: updateInfor.id,
            tenSanPham: updateInfor.tenSanPham,
            maTheLoai: updateInfor.maTheLoai,
            giaBan: updateInfor.giaBan,
            nhaCungCap: updateInfor.nhaCungCap,
            xuatXu: updateInfor.xuatXu,
            kichCo: updateInfor.kichCo,
            trongLuong: updateInfor.trongLuong,
            tenAnh: updateInfor.tenAnh,
          };
        }
        return {
          ...state,
          listProduct: newList,
          currentProductMessage: {
            message: "Cập nhật thành công",
            type: "success",
          },
        };
      }
      return {
        ...state,
        currentProductMessage: {
          message: "Cập nhật không thành công",
          type: "error",
        },
      };
    },
  },
});

const { reducer, actions } = Product;
export const {
  clearProductMessage,
  updateProduct,
  getListProduct,
  deleteProduct,
  addProduct,
} = actions;
export default reducer;
