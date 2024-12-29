import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "../pages/homePage.jsx"
import TechnicalsupportPage from "../pages/technicalsupportPage.jsx"
import AdminchatPage from "../pages/adminchatPage.jsx";
import Userchat from "../component/userchat.jsx";
import Register from "../component/auth/register.jsx";
import Login from "../component/auth/login.jsx";

export default function LayoutRoutes() {
  const [token, setToken] = useState(localStorage.getItem('token'));
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technicalsupport" element={<TechnicalsupportPage />} />
          <Route path="/admin" element={<AdminchatPage />} />
          <Route path="/user" element={<Userchat />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login setToken={setToken}/>} />

         
        </Routes>
      </>
    )
  };