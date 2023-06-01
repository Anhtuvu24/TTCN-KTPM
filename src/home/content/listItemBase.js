import React, { useState, useEffect } from "react";
import AddCart from "../../iconBase/addCart";
import ItemProduct from "./item";
import { addProduct } from "../../features/slice/cart";
import { useDispatch } from "react-redux";
import item1 from "../../itemImg/item1.jpg";

import "./index.scss";

function ListItem(props) {
  const { list, title, type, onVisibleByFast, setIdProductDetail, idDanhMuc } =
    props;
  const [itemsShow, setItemsShow] = useState(4);
  const newItem = list.filter((item) => item.maTheLoai === idDanhMuc);
  const dispatch = useDispatch();
  const showMore = () => {
    setItemsShow(itemsShow + 4);
  };

  const onAddProduct = (item) => {
    dispatch(addProduct(item));
  };

  return newItem.length ? (
    <div className="container">
      <h1>{title}</h1>
      <div className="list-item-container">
        {newItem.map((item, index) => {
          if (index < itemsShow) {
            return (
              <ItemProduct
                setIdProductDetail={setIdProductDetail}
                onVisibleByFast={onVisibleByFast}
                onAddProduct={onAddProduct}
                src={item1}
                name={item.tenSanPham}
                id={item.id}
                price={item.giaBan}
                color={item.mauSac}
                size={item.kichCo}
                tenAnh={item.tenAnh}
              />
            );
          }
        })}
      </div>
      {newItem.length > itemsShow && (
        <button onClick={showMore} className="show-more">
          Xem thêm
        </button>
      )}
    </div>
  ) : null;
}

export default ListItem;
