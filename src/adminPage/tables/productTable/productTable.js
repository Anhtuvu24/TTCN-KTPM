import React from "react";
import "./index.scss";
import { list } from "./listSP";
import Product from "./productItem";
function ProductTable(props) {
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
  return (
    <>
      <div className="product-table-container">
        {columnName.map((item, index) => {
          return <p className="title">{item.name}</p>;
        })}
        <div className="information">
          {list.map((item, index) => {
            return (
              <div className="row">
                <Product index={index} item={item} />
                <button>Sửa</button>
                <button>Xóa</button>
              </div>
            );
          })}
        </div>
      </div>
      <button className="add-btn">Thêm mới</button>
    </>
  );
}

export default ProductTable;
