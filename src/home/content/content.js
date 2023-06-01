import React, { useState, useEffect } from "react";
import AddCart from "../../iconBase/addCart";
import ListItem from "./listItemBase";
import "./index.scss";

function Content(props) {
  const {
    onVisibleByFast,
    setIdProductDetail,
    listProduct,
    getListPD,
    listDM,
    messageStatus,
    getListDM,
  } = props;
  useEffect(() => {
    getListPD();
    getListDM();
  }, [messageStatus]);
  return (
    <div className="content-container">
      {listDM &&
        listDM.map((item, index) => {
          return (
            <ListItem
              onVisibleByFast={onVisibleByFast}
              setIdProductDetail={setIdProductDetail}
              title={item.tenDanhMuc}
              idDanhMuc={item.id}
              list={listProduct}
              type={item.type}
            />
          );
        })}
    </div>
  );
}

export default Content;
