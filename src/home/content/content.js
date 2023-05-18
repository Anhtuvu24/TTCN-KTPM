import React, { useState, useEffect } from "react";
import AddCart from "../../iconBase/addCart";
import ListItem from "./listItemBase";
import { listItem } from "../../listItem";
import { listTypeItem } from "../../const/typeItem";
import "./index.scss";

function Content(props) {
  const [itemNewShow, setItemNewShow] = useState(4);
  const newItem = listItem.filter((item) => item.type === "newItem");
  const showMore = () => {
    setItemNewShow(itemNewShow + 4);
  };

  return (
    <div className="content-container">
      {listTypeItem &&
        listTypeItem.map((item, index) => {
          return (
            <ListItem title={item.title} list={listItem} type={item.type} />
          );
        })}
    </div>
  );
}

export default Content;
