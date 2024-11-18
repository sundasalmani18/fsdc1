import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage.jsx"
import TechnicalsupportPage from "../pages/technicalsupportPage.jsx"
import AdminchatPage from "../pages/adminchatPage.jsx";
import Userchat from "../component/userchat.jsx";

export default function LayoutRoutes() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technicalsupport" element={<TechnicalsupportPage />} />
          <Route path="/adminchat" element={<AdminchatPage />} />
          <Route path="/userchat" element={<Userchat />} />
         
        </Routes>
      </>
    )
  };