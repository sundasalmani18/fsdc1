
import { Link, Routes, Route } from "react-router-dom";
// Global Pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/loginPage";
import SignupPage from "../pages/signupPage";


// Admin Pages
import AdminLoginPage from "../pages/adminPages/adminLoginPage";
import AdminCategory from "../pages/adminPages/admincategory";
import AdminItems from "../pages/adminPages/adminitems";
import AdminDashboardPage from "../pages/adminPages/adminDashboardPage";
import  AddCategories from "../pages/adminPages/adminaddcategory";
import  AddItems from "../pages/adminPages/adminadditems";

export default function LayoutRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/admin/login"   element={<AdminLoginPage/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboardPage/>}/>
        <Route path="/admin/category" element={<AdminCategory/>}/>
        <Route path="/admin/items" element={<AdminItems/>}/>
        <Route path="/admin/category/addcategories" element={<AddCategories/>}/>
        <Route path="/admin/category/additems" element={<AddItems/>}/>

        {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallary" element={<Gallary />} /> */}
      </Routes>
    </>
  )
};