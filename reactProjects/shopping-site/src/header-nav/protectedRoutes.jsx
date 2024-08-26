import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function protectedRoutes() {
  const loggedIn = window.localStorage.getItem("loggedIn");
  return loggedIn === "true" ? <Outlet /> : <Navigate to="/login" />;
}

export default protectedRoutes;
