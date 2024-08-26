import { Link, Routes, Route } from "react-router-dom";
// Global Pages
import HomePage from "../component/home";
import Login from "../component/login";
import SignupPage from "../component/register";
import AdminDashboard from "../component/admindashboard";
import Product from "./../component/product";
import Category from "../component/category";
export default function LayoutRoutes() {
  const usertype = window.localStorage.getItem("usertype");
  const loggedIn = window.localStorage.getItem("loggedIn");

  return (
    <>
      <Routes>
        {!loggedIn && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        )}

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}
