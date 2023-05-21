import Navigation from "./navigation/navigate";
import HeaderContainer from "./header/headerContainer";
import Slide from "./slider/slide";
import AccountAbout from "../account/account";
import Content from "./content/content";
import VideoIFrame from "./video/videoIframe";
import Footer from "./footer/footer";
import CartContainer from "../cart/cartContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Home(props) {
  const navigate = useNavigate();
  const { userLogin } = props;
  const [visibleModalUser, setVisibleModalUser] = useState(false);
  const [visibleModalCart, setVisibleModalCart] = useState(false);
  const [numberProduct, setNumberProduct] = useState(0);
  const onVisible = () => {
    setVisibleModalUser(!visibleModalUser);
  };

  const onVisibleModalCart = () => {
    setVisibleModalCart(!visibleModalCart);
  };
  useEffect(() => {
    // if (!userLogin) {
    //   navigate("/login");
    // }
  }, [userLogin]);
  return (
    <div>
      <HeaderContainer
        onVisibleModalCart={onVisibleModalCart}
        onVisible={onVisible}
      />
      <Navigation />
      <Slide />
      {visibleModalUser && (
        <AccountAbout userLogin={userLogin} onVisible={onVisible} />
      )}
      {visibleModalCart && (
        <CartContainer onVisibleModalCart={onVisibleModalCart} />
      )}
      <Content />
      <VideoIFrame />
      <Footer />
    </div>
  );
}
