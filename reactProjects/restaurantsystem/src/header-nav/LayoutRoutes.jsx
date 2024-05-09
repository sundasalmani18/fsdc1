
import { Link, Routes, Route } from "react-router-dom";
// Global Pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/loginPage";
import SignupPage from "../pages/signupPage";
// Admin Pages
import AdminLoginPage from "../pages/adminPages/adminLoginPage";
import AdminDashboardPage from "../pages/adminPages/adminDashboardPage";

export default function LayoutRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/admin/login"   element={<AdminLoginPage/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboardPage/>}/>

        {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallary" element={<Gallary />} /> */}
      </Routes>
    </>
  )
};