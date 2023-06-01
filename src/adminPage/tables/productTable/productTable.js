import React, { useState, useEffect } from "react";
import "./index.scss";
import { list } from "./listSP";
import Product from "./productItem";
import ProductContainer from "./ProductContainer";
import { connect } from "react-redux";
import {
  getListPD,
  deletePD,
} from "../../../features/saga/sagaProduct/typeProduct";

function ProductTable({ messageStatus, getListPD, listProduct, deletePD }) {
  const [visible, onVisible] = useState(false);
  const [visibleAdd, onVisibleAdd] = useState(false);
  const [productSelect, setProductSelect] = useState({});
  useEffect(() => {
    getListPD();
  }, [messageStatus]);
  const columnName = [
    {
      name: "Mã sản phẩm",
    },
    {
      name: "Tên sản phẩm",
    },
    {
      name: "Loại sản phẩm",
    },
    {
      name: "Hình ảnh",
    },
    {
      name: "Giá thành",
    },
    {
      name: "Nhà cung cấp",
    },
    {
      name: "Trọng lượng",
    },
    {
      name: "Xuất xứ",
    },
    {
      name: "Kích thước",
    },
    {
      name: "Màu sắc",
    },
  ];

  const onClickSua = (item) => {
    setProductSelect(item);
    onVisible(!visible);
  };

  const onClickThem = () => {
    onVisibleAdd(true);
  };

  const onClickXoa = (id) => {
    deletePD(id);
  };
  return (
    <>
      <div className="product-table-container">
        {visible || visibleAdd ? (
          <ProductContainer
            onVisible={onVisible}
            product={productSelect}
            visibleAdd={visibleAdd}
            onVisibleAdd={onVisibleAdd}
          />
        ) : null}
        {columnName.map((item, index) => {
          return <p className="title">{item.name}</p>;
        })}
        <div className="information">
          {listProduct.map((item, index) => {
            return (
              <div className="row">
                <Product index={index} item={item} />
                <button onClick={() => onClickSua(item)}>Sửa</button>
                <button onClick={() => onClickXoa(item.id)}>Xóa</button>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={onClickThem} className="add-btn">
        Thêm mới
      </button>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  // const listTL = state.theLoai.listTheLoai;
  const messageStatus = state.product.currentProductMessage;
  const listProduct = state.product.listProduct;
  return { messageStatus, listProduct };
};

const mapDispatchToProps = (dispatch) => ({
  getListPD: () => dispatch(getListPD()),
  deletePD: (input) => dispatch(deletePD(input)),
});

const ProductTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTable);

export default ProductTableContainer;
