import Navigation from "./navigation/navigate";
import HeaderContainer from "./header/headerContainer";
import Slide from "./slider/slide";
import AccountAbout from "../account/account";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Home(props) {
  const navigate = useNavigate();
  const { userLogin } = props;
  const [visibleModal, setVisibleModal] = useState(false);
  const onVisible = () => {
    setVisibleModal(!visibleModal);
  };
  useEffect(() => {
    if (!userLogin) {
      navigate("/login");
    }
  }, [userLogin]);
  return (
    <div>
      <HeaderContainer onVisible={onVisible} />
      <Navigation />
      <Slide />
      {visibleModal && (
        <AccountAbout userLogin={userLogin} onVisible={onVisible} />
      )}
    </div>
  );
}
