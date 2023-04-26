import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./login/loginContainer";
import Home from "./home/home";
import NotFound from "./notFound/notFound";
import Register from "./register/register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
