import { Routes,Route } from "react-router-dom";
import ContactusPages from "../pages/contactuspages";
import { HomePage } from "../pages/Homepages";



export function Layout (){
 return(
  <>
  <Routes>

    <Route path="/contactus" element={<ContactusPages/>}/>
    <Route path="/" element={<HomePage/>}/>

  </Routes>

  </>
       
 );

}