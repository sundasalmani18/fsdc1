import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext"
import { useContext } from "react";

export default function Nav({ isLoggedIn, userType }) {

  const { login, logout, currentUser } = useContext(AuthContext)
  const navigate = useNavigate();

  const userLogout = async (e) => {

    e.preventDefault()
    await logout()
    navigate('/')
  }
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Category</a>
        </li>
        {!isLoggedIn &&
          (<>
            <li className="nav-item">
              <a id="headbutton" onClick={() => navigate("/register")} className="btn-sm btn btn-outline-success m-2 ">Register</a>

            </li>
            <li className="nav-item">
              <a id="headbutton" onClick={() => navigate("/login")} className="btn-sm btn btn-outline-primary m-2 ">Login</a>

            </li>
          </>)}


        {
          isLoggedIn && userType === "admin" ? (
            <li className="nav-item">
              <a id="headbutton" onClick={() => navigate("/admindashboard")} className="btn-sm btn btn-outline-primary m-2 ">Dashboard</a>

            </li>
          ) : isLoggedIn && (
            <>
              <li className="nav-item">
                <a id="headbutton" onClick={() => navigate("/userdetail")} className="btn-sm btn btn-outline-primary m-2 ">User Details</a>
              </li>
            </>



          )
        }
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Cart</a>
        </li>
        <li className="nav-item">
          <button onClick={userLogout} className="btn btn-primary btn-sm py-2 w-100 m-2">Logout</button>
          {/* <a className="nav-link disabled btn-sm btn btn-outline-primary m-2 " onClick={userLogout}>logout</a> */}
        </li>


      </ul>
    </>
  );
}