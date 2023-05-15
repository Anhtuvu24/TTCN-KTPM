import React, {useState} from "react";
import AddCart from "../../iconBase/addCart";
import { listItem } from "../../listItem";

import "./index.scss";

function Content(props) {
    console.log(listItem);
    return (
        <div className="content-container">
            <h1>Sản phẩm mới</h1>
            <div className="list-item-container">
                {listItem.map((item, index) => {
                    if(item.type === "newItem") {
                        return (
                            <div className="item-container">
                                <img src = {item.src}/>
                                <div className="infor-cart">
                                    <div className="infor">
                                        <p className="name">{item.name.toUpperCase()}</p>
                                        <p className="price">{item.price}đ</p>
                                    </div>
                                    <div className="cart">
                                        <AddCart/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Content;