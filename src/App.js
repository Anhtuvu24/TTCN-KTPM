import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Home from "./home/home";
import NotFound from "./notFound/notFound";
import Register from "./register/register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
