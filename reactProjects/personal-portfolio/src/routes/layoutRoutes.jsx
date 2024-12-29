import { Routes, Route ,  Navigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "../pages/homePage.jsx"
import TechnicalsupportPage from "../pages/technicalsupportPage.jsx"
import AdminchatPage from "../pages/adminchatPage.jsx";
import Userchat from "../component/userchat.jsx";
import Register from "../component/auth/register.jsx";
import Login from "../component/auth/login.jsx";

export default function LayoutRoutes() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  // const token = localStorage.getItem('token'); // Get the JWT token
  // const userId = localStorage.getItem('userId'); // Get the user ID
  // const username = localStorage.getItem('username');

  const isUserLoggedIn = false;
     return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminchatPage />} />
          <Route path="/user" element={<Userchat />} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
        
        {/* If the user is not logged in, redirect to Register */}
        <Route path="/technicalsupport" element={isUserLoggedIn ? <TechnicalsupportPage /> : <Navigate to="/register" />} />

        <Route path="/register" element={<Register />} />
        {/* Define other routes here */}


         
        </Routes>
      </>
    )
  };