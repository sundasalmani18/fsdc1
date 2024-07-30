import { createContext, useState } from "react";
import { AuthContext } from "../../../restaurantsystem/src/context/authContext";



export const AuthContext=createContext();
export const AuthContextProvider =({children})=>{
const [currentUser,setCurrentUser]=useState(
   JSON.parse( localStorage.getItem("user"))
)

const login=async(data)=>{
    const res= await axios.post('http://localhost:8000/auth/login', data)
    setCurrentUser(res.data)
}
const logout=async()=>{
    const res= await axios.post('http://localhost:8000/auth/logout')
    setCurrentUser({})
}

<AuthContext.Provider value={{currentUser,login,logout}}>
{children}
</AuthContext.Provider>
}