import { Routes,Route, Navigate } from "react-router-dom";
import ContactusPages from "../pages/contactuspages";
import { HomePage } from "../pages/Homepages";
import Register from "../components/register";
import Login from "../components/login";
import Admindashboard from "../components/admin-dashboard";
import Nav from "../components/nav";
import UserDetail from "../components/userdetail";
import ProtectedRoutes from "../components/protectedRoutes";



export function Layout (){
  const isLoggedIn=window.localStorage.getItem("loggedIn")
  const userType=window.localStorage.getItem("userType")

 return(
  <>
 
 <Nav isLoggedIn={isLoggedIn} userType={userType}/>

  <Routes>
  {/* {unauthorized routes} */}
  {!isLoggedIn &&(
    <>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/" element={<Login/>}/>
    </>
  )}
  
 



  <Route element={<ProtectedRoutes/>}>
  <Route path="/login" element={<Navigate to= "/"/>}/>
     <Route path="/register"element= {<Navigate to= "/"/>}/>

     {

      userType!="admin"?(
        <>
         <Route path="/userdetail" element={<UserDetail/>}/>
         <Route path="/contactus" element={<ContactusPages/>}/>
        <Route path="/" element={<UserDetail/>}/>
        <Route path="/admindashboard" element={<Navigate to= "/"/>}/>
   
        </>
      ):(
        <>
         <Route path="/contactus" element={<ContactusPages/>}/>
    <Route path="/" element={<Admindashboard/>}/>
    <Route path="/admindashboard" element={<Admindashboard/>}/>
    <Route path="/userdetail" element={<UserDetail/>}/>
        </>
      )
     }
   
    </Route>
  </Routes>

  </>
       
 );

}