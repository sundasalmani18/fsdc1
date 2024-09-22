import { Link, Routes, Route, Navigate } from "react-router-dom";
// Global Pages
import HomePage from "../component/home";
import Login from "../component/login";
import SignupPage from "../component/register";
import AdminDashboard from "../component/admindashboard";
import Product from "./../component/product";
import Category from "../component/category";
import ProtectedRoutes from "./protectedRoutes";
import Navbar from "../component/navbar";
import ProductForm from "../component/productForm";
export default function LayoutRoutes() {
  const usertype = window.localStorage.getItem("usertype");
  const loggedIn = window.localStorage.getItem("loggedIn");

  return (
    <>
      <Routes>
        {!loggedIn && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        )}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/signup" element={<Navigate to="/" />} />

          {usertype != "admin" ? (
            <>
              <Route path="/product" element={<Product />} />
              <Route path="/category" element={<Category />} />
              <Route path="/admindashboard" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/product" element={<Product />} />
              <Route path="/productform" element={<ProductForm />} />
              <Route path="/category" element={<Category />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}
