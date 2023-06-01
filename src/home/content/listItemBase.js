import React, { useState, useEffect } from "react";
import AddCart from "../../iconBase/addCart";
import ItemProduct from "./item";
import { addProduct } from "../../features/slice/cart";
import { useDispatch } from "react-redux";

import "./index.scss";

function ListItem(props) {
  const { list, title, type, onVisibleByFast, setIdProductDetail } = props;
  const [itemsShow, setItemsShow] = useState(4);
  const newItem = list.filter((item) => item.type === type);
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
                src={item.src}
                name={item.name}
                id={item.ID}
                price={item.price}
              />
            );
          }
        })}
      </div>
      {newItem.length >= itemsShow && (
        <button onClick={showMore} className="show-more">
          Xem thêm
        </button>
      )}
    </div>
  ) : null;
}

export default ListItem;
