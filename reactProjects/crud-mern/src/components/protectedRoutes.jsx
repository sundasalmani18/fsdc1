import { Navigate, Outlet } from "react-router-dom"


export default function ProtectedRoutes(){
    const isLoggedIn=window.localStorage.getItem("loggedIn")
    return isLoggedIn==="true" ?<Outlet/>:<Navigate to="/login"/>
}