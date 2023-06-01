import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// Style
import "./index.scss";

function Navigation(props) {
  const { setIdProduct } = props;
  const navigate = useNavigate();
  const items = {
    home: {
      text: "Trang chủ",
    },
    nationalJersey: {
      text: "Áo đội tuyển quốc gia",
      firstChild: [
        {
          id: 1,
          text: "Việt Nam",
        },
        {
          id: 2,
          text: "Hàn Quốc",
        },
        {
          id: 3,
          text: "Trung Quốc",
        },
        {
          id: 4,
          text: "Nhật Bản",
        },
        {
          id: 5,
          text: "Quatar",
        },
      ],
    },
    clubJersey: {
      text: "Áo CLB",
      firstChild: [
        {
          id: 1,
          text: "Manchester City",
        },
        {
          id: 2,
          text: "Liverpool",
        },
        {
          id: 3,
          text: "Chelsea",
        },
        {
          id: 4,
          text: "Real Madrid",
        },
        {
          id: 5,
          text: "Bayern Munich",
        },
      ],
    },
    noneLogoJersey: {
      text: "Áo không logo",
    },
    jacket: {
      text: "Áo khoác",
    },
    longArmShirt: {
      text: "Áo dài tay",
    },
    childJersey: {
      text: "Áo trẻ em",
    },
  };

  const onClick = (typeItemNav) => {
    switch (typeItemNav) {
      case "Trang chủ":
        navigate("/");
        setIdProduct(null);
        break;
      default:
        console.log("Test");
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
                      <p className="item">{keyChild.text}</p>
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

export default Navigation;
