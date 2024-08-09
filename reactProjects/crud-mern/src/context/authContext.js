import { createContext, useState,useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

   
export const AuthContext=createContext();
export const   AuthContextProvider = ({children})=>{
    // const navigate = useNavigate();
  

const [currentUser,setCurrentUser]=useState(
   JSON.parse( localStorage.getItem("user"))
)



const login=async(data)=>{
  
    const res= await axios.post('http://localhost:8000/auth/login', data)   
   console.log('res', res)
  
   setCurrentUser(res.data)
   
   window.localStorage.setItem("userType",res.data.userType)
   window.localStorage.setItem("loggedIn",true)
   console.log("current ",currentUser)
    if(res.data.userType === "admin"){
    
    //   navigate("../admindashboard")   
    }
    else{
       
        // navigate("/")
 

    }
 
}
const logout=async()=>{
    const res= await axios.get('http://localhost:8000/auth/logout')
    setCurrentUser({})

}


useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
})

return(

<AuthContext.Provider value={{currentUser,login,logout}}>
{children}
</AuthContext.Provider>
)
}
