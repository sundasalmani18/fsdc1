import { useNavigate } from "react-router-dom";

export default  function Nav(){
  const navigate =useNavigate();
    return(
   <>
  <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Category</a>
  </li>
  <li className="nav-item">
  <a id="headbutton" onClick={()=>navigate("/register")}  className="btn-sm btn btn-outline-success m-2 ">Register</a>
    
  </li>
  <li className="nav-item">
  <a id="headbutton" onClick={()=>navigate("/login")}  className="btn-sm btn btn-outline-primary m-2 ">Login</a>
  
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Cart</a>
  </li>
</ul>
   </>
    );
}