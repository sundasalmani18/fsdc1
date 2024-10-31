import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage"
import TechnicalsupportPage from "../pages/technicalsupportPage"

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