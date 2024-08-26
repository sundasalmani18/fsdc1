import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = async (data) => {
    console.log("login data", data);
    const res = await axios.post("http://localhost:8000/auth/login", data);
    console.log("res", res);
    setCurrentUser(res.data);
    window.localStorage.setItem("usertype", res.data.userType);
    window.localStorage.setItem("loggedIn", true);
    if (res.data.userType === "admin") {
      return (window.location.href = "/admindashboard");
    } else {
      window.location.href = "/";
    }
  };

  const logout = async () => {
    const res = await axios.get("http://localhost:8000/auth/logout");
    console.log("res logout", res);
    setCurrentUser({});
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  });

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
