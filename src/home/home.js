import Navigation from "./navigation/navigate";
import HeaderContainer from "./header/headerContainer";
import Slide from "./slider/slide";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Home(props) {
  const navigate = useNavigate();
  const { userLogin } = props;
  useEffect(() => {
    if (!userLogin) {
      navigate("/login");
    }
  }, [userLogin]);
  return (
    <div>
      <HeaderContainer />
      <Navigation />
      <Slide />
    </div>
  );
}
