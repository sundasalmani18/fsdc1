import { Link, Routes, Route } from "react-router-dom";
// Global Pages
import HomePage from "../component/home";
import Login from "../component/login";
import SignupPage from "../component/register";
export default function LayoutRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}
