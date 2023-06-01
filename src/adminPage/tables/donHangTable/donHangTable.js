import React from "react";
import "./index.scss";
import { list } from "./listDH";
import User from "./donHangItem";
function DonHangTable(props) {
  const columnName = [
    {
      name: "Mã đơn hàng",
    },
    {
      name: "Trạng thái",
    },

    {
      name: "Ngày mua",
    },
    {
      name: "Sản phẩm",
    },
    {
      name: "Tổng tiền",
    },
    {
      name: "Người mua",
    },
  ];
  return (
    <div className="don-hang-table-container">
      {columnName.map((item, index) => {
        return <p className="title">{item.name}</p>;
      })}
      <div className="information">
        {list.map((item, index) => {
          return (
            <div className="row">
              <User index={index} item={item} />
              <button>Sửa</button>
              <button>Xóa</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DonHangTable;
