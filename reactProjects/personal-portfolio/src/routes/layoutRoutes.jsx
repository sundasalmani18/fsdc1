import { Routes, Route ,  Navigate } from "react-router-dom";
import { useState,useEffect} from "react";
import HomePage from "../pages/homePage.jsx"
import TechnicalsupportPage from "../pages/technicalsupportPage.jsx"
import AdminchatPage from "../pages/adminchatPage.jsx";
import Userchat from "../component/userchat.jsx";
import Register from "../component/auth/register.jsx";
import Login from "../component/auth/login.jsx";

// export default function LayoutRoutes() {
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   // const token = localStorage.getItem('token'); // Get the JWT token
//   // const userId = localStorage.getItem('userId'); // Get the user ID
//   // const username = localStorage.getItem('username');

//   const isUserLoggedIn = false;
//      return (
//       <>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/admin" element={<AdminchatPage />} />
//           <Route path="/user" element={<Userchat />} />
//           <Route path="/login" element={<Login setToken={setToken}/>} />
        
//         {/* If the user is not logged in, redirect to Register */}
//         <Route path="/technicalsupport" element={isUserLoggedIn ? <TechnicalsupportPage /> : <Navigate to="/register" />} />

//         <Route path="/register" element={<Register />} />
//         {/* Define other routes here */}


         
//         </Routes>
//       </>
//     )
//   };






export default function LayoutRoutes() {
  const [token, setToken] = useState(localStorage.getItem('token')); // Check token from localStorage
  const [userRole, setUserRole] = useState(localStorage.getItem('role')); // Check user role (admin or user)

  // Effect hook to update the token and user role when they change
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    setToken(storedToken);
    setUserRole(storedRole);
  }, [localStorage.getItem('token'), localStorage.getItem('role')]);

  const isUserLoggedIn = !!token; // Check if the user is logged in based on the token
  const isAdmin = userRole === 'ADMIN'; // Check if the user is an admin based on role

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Admin can access both /admin and /user */}
        <Route path="/admin" element={isUserLoggedIn && isAdmin ? <AdminchatPage /> : <Navigate to="/" />} />

        {/* User can only access /user */}
        <Route path="/user" element={isUserLoggedIn ? <Userchat /> : <Navigate to="/login" />} />
        
        {/* If the user is logged in, redirect to HomePage (or another route) */}
        <Route path="/login" element={isUserLoggedIn ? <Navigate to="/" /> : <Login setToken={setToken} />} />
        
        {/* Redirect logged-in users from /register to home page */}
        <Route path="/register" element={isUserLoggedIn ? <Navigate to="/" /> : <Register />} />

        {/* If the user is not logged in, redirect to Register */}
        <Route path="/technicalsupport" element={isUserLoggedIn ? <TechnicalsupportPage /> : <Navigate to="/register" />} />
      </Routes>
    </>
  );
}

