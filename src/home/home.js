import NavigateContainer from "./navigation/navigate";
import HeaderContainer from "./header/headerContainer";
import Slide from "./slider/slide";
import AccountContainer from "../account/accountContainer";
import Content from "./content/content";
import ContentContainer from "./content/contentContainer";
import VideoIFrame from "./video/videoIframe";
import Footer from "./footer/footer";
import CartContainer from "../cart/cartContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ByFastItem from "./itemByFast/byFast";
import { clearMessage } from "../features/slice/accountUser";
import { useDispatch } from "react-redux";

export default function Home(props) {
  const navigate = useNavigate();
  const { userLogin } = props;
  const [visibleModalUser, setVisibleModalUser] = useState(false);
  const [visibleModalCart, setVisibleModalCart] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [idProduct, setIdProduct] = useState(null);
  const dispatch = useDispatch();

  const setIdProductDetail = (item) => {
    setIdProduct(item);
  };

  const onVisible = () => {
    setVisibleModalUser(!visibleModalUser);
  };

  const onVisibleByFast = (item) => {
    if (dataModal) {
      setDataModal(null);
    } else {
      setDataModal(item);
    }
  };

  const onVisibleModalCart = () => {
    setVisibleModalCart(!visibleModalCart);
  };
  useEffect(() => {
    // if (!userLogin) {
    //   navigate("/login");
    // }
    dispatch(clearMessage());
  }, []);
  return (
    <div>
      <HeaderContainer
        onVisibleModalCart={onVisibleModalCart}
        onVisible={onVisible}
      />
      <NavigateContainer setIdProduct={setIdProduct} />
      <Slide />
      {visibleModalUser && <AccountContainer onVisible={onVisible} />}
      {visibleModalCart && (
        <CartContainer onVisibleModalCart={onVisibleModalCart} />
      )}
      <ContentContainer
        setIdProductDetail={setIdProductDetail}
        onVisibleByFast={onVisibleByFast}
      />
      {dataModal ? (
        <ByFastItem
          onVisibleByFast={onVisibleByFast}
          id={dataModal.id}
          name={dataModal.name}
          price={dataModal.price}
          src={dataModal.src}
          color={dataModal.color}
          size={dataModal.size}
          tenAnh={dataModal.tenAnh}
        />
      ) : null}
      <VideoIFrame />
      <Footer />
    </div>
  );
}
