import React, { useState, useEffect } from "react";
import AddCart from "../../iconBase/addCart";
import ListItem from "./listItemBase";
import { listItem } from "../../listItem";
import { listTypeItem } from "../../const/typeItem";
import "./index.scss";

function Content(props) {
  const { onVisibleByFast, setIdProductDetail } = props;
  return (
    <div className="content-container">
      {listTypeItem &&
        listTypeItem.map((item, index) => {
          return (
            <ListItem
              onVisibleByFast={onVisibleByFast}
              setIdProductDetail={setIdProductDetail}
              title={item.title}
              list={listItem}
              type={item.type}
            />
          );
        })}
    </div>
  );
}

export default Content;
