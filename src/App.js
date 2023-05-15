import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./login/loginContainer";
import HomeContainer from "./home/homeContainer";
import NotFound from "./notFound/notFound";
import Register from "./register/register";
function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
