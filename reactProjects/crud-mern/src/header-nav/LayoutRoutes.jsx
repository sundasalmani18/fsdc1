import { Routes,Route } from "react-router-dom";
import ContactusPages from "../pages/contactuspages";
import { HomePage } from "../pages/Homepages";
import Register from "../components/register";
import Login from "../components/login";
import Admindashboard from "../components/admin-dashboard";
import Nav from "../components/nav";



export function Layout (){
  const isLoggedIn=window.localStorage.getItem("loggedIn")
  const userType=window.localStorage.getItem("userType")

 return(
  <>
  <Nav isLoggedIn={isLoggedIn} userType={userType}/>


  <Routes>

    <Route path="/" element={isLoggedIn == "true" ?<HomePage/>:<Login/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
    <Route path="/contactus" element={<ContactusPages/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/admin-dashboard" element={<Admindashboard/>}/>

  </Routes>

  </>
       
 );

}