import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./login/loginContainer";
import HomeContainer from "./home/homeContainer";
import NotFound from "./notFound/notFound";
import Register from "./register/register";
import AdminPageContainer from "./adminPage/adminPageContainer";
function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPageContainer />} />
      </Routes>
    </div>
  );
}

export default App;
