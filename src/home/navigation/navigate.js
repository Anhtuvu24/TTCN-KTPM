import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

// Style
import "./index.scss";

function Navigation(props) {
  const items = {
    home: {
      text: "Trang chủ",
    },
    nationalJersey: {
      text: "Áo đội tuyển quốc gia",
      firstChild: {
        text1: {
          text: "text1",
        },
        text2: {
          text: "text2",
        },
      },
    },
    clubJersey: {
      text: "Áo CLB",
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
  const [navChildVisible, setNavChildVisible] = useState(false);
  const [focusMenuChild, setFocusMenuChild] = useState(false);
  const onMouseEnter = () => {
    setNavChildVisible(true);
    console.log(focusMenuChild);
  };
  const onMouseLeave = () => {
    setNavChildVisible(false);
  };
  const onEnterChild = () => {
    setFocusMenuChild(true);
  };
  const onLeave = () => {
    if (!focusMenuChild) {
      setNavChildVisible(false);
    }
  };
  return (
    <div className="nav-Container">
      {Object.keys(items).map((key) => {
        return (
          <div
            className="item-container"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onLeave}
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
              <div
                onMouseLeave={onMouseLeave}
                onMouseEnter={onEnterChild}
                className={navChildVisible ? "nav-child" : "none"}
              >
                {Object.keys(items[key].firstChild).map((keyChild) => {
                  return (
                    <div className="nav-child-item">
                      <p className="item">
                        {items[key].firstChild[keyChild].text}
                      </p>
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