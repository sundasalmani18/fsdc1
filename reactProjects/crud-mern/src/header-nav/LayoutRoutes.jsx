import { Routes,Route } from "react-router-dom";
import ContactusPages from "../pages/contactuspages";
import { HomePage } from "../pages/Homepages";
import Register from "../components/register";
import Login from "../components/login";



export function Layout (){
 return(
  <>
  <Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
    <Route path="/contactus" element={<ContactusPages/>}/>
    <Route path="/" element={<HomePage/>}/>

  </Routes>

  </>
       
 );

}