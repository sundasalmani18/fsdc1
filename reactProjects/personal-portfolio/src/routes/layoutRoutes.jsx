import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage.jsx"
import TechnicalsupportPage from "../pages/technicalsupportPage.jsx"

export default function LayoutRoutes() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technicalsupport" element={<TechnicalsupportPage />} />
         
        </Routes>
      </>
    )
  };