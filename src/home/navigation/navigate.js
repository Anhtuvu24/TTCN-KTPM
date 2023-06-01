import React, { useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
// Style
import "./index.scss";
import { getListTL } from "../../features/saga/sagaTheLoai/typeTheLoaiSaga";
import { getListDM } from "../../features/saga/sagaDanhMuc/typeDanhMucSaga";

function Navigation(props) {
  const { setIdProduct, listDM, listTL, getListDM, getListTL } = props;
  const navigate = useNavigate();
  const content = listDM.map((item, index) => ({
    [`${item.id}`]: {
      text: item.tenDanhMuc,
      firstChild: listTL.filter(
        (itemChild, index) => itemChild.maDanhMuc === item.id
      ),
    },
  }));
  const items = {
    home: {
      text: "Trang chủ",
    },
    ...content.reduce((result, item) => ({ ...result, ...item }), {}),
  };

  useEffect(() => {
    getListDM();
    getListTL();
  }, []);

  const onClick = (typeItemNav) => {
    switch (typeItemNav) {
      case "Trang chủ":
        navigate("/");
        setIdProduct(null);
        break;
      default:
        break;
    }
  };
  return (
    <div className="nav-Container">
      {Object.keys(items).map((key) => {
        return (
          <div
            onClick={() => onClick(items[key].text)}
            className="item-container"
          >
            <div className="item-nav">
              <p>{`${items[key].text}`}</p>
              {items[key].firstChild ? (
                <DownOutlined style={{ marginLeft: "5px" }} />
              ) : (
                ""
              )}
            </div>
            {items[key].firstChild && (
              <div className={"nav-child"}>
                {items[key].firstChild.map((keyChild) => {
                  return (
                    <div key={keyChild.id} className="nav-child-item">
                      <p className="item">{keyChild.tenTheLoai}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const listDM = state.danhMuc.listDanhMuc;
  const listTL = state.theLoai.listTheLoai;
  return { listDM, listTL };
};

const mapDispatchToProps = (dispatch) => ({
  getListTL: () => dispatch(getListTL()),
  getListDM: () => dispatch(getListDM()),
});

const NavigateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default NavigateContainer;
