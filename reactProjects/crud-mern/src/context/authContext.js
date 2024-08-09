import { createContext, useState } from "react";
import axios from "axios";




export const AuthContext=createContext();
export const AuthContextProvider =({children})=>{
const [currentUser,setCurrentUser]=useState(
   JSON.parse( localStorage.getItem("user"))
)


console.log("current user", currentUser)
const login=async(data)=>{
    const res= await axios.post('http://localhost:8000/auth/login', data)
   window.localStorage.setItem("userType",res.data.userType)
   window.localStorage.setItem("loggedIn",true)
    setCurrentUser(res.data)
    if(res.data.userType === "admin"){
        return(window.location.href="../admin-dashboard")
    }
    else{
        return(window.location.href="/")

    }
}
const logout=async()=>{
    const res= await axios.get('http://localhost:8000/auth/logout')
    setCurrentUser({})
}
return(

<AuthContext.Provider value={{currentUser,login,logout}}>
{children}
</AuthContext.Provider>
)
}