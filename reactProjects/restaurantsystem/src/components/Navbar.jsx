import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Login from './login';
import {Routes, Route, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


export default function Navbar() {
  const navigate =useNavigate();
  return (
    <>
      {/* <!-- ==========================header section============================================= --> */}
      <div id="header">
        <div className="container py-3">
          <div className="row">
            {/* <!-- <div className="col-md-2">
              <h2 id="logo" className="p-2" >Yummy.</h2>
            </div> --> */}
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light ">
              <FontAwesomeIcon icon={faUtensils} className=" fa fa-2x"  />
                <i className="fa fa-utensils me-3  fa-2x "></i>
                <a id="logo" className="navbar-brand" href="#">Yummy.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#menu">Menu</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#service">Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#Chefs">Chefs</a>
                    </li>



                  </ul>
                  <form className="form-inline my-2  my-lg-0 m-3 ">

                    <a id="headbutton" href="#reservation" className="btn-sm btn btn-outline-success ">Book Table</a>
                    {/* <a id="headbutton" href={<Login />} className="btn-sm btn btn-outline-success ">Login/Register</a> */}
                    <a id="headbutton" onClick={()=>navigate("/login")}  className="btn-sm btn btn-outline-success ">Login/Register</a>
                    {/* <a id="headbutton" href="./admin/adminLogin.html" className="btn-sm btn btn-outline-success">Admin Portal</a> */}
                    <a id="headbutton" onClick={()=>navigate("/admin")} className="btn-sm btn btn-outline-success">Admin Portal</a>
                  </form>
                </div>
              </nav>

            </div>
          </div>
        </div>
      </div>
      {/* <!-- ================================header section end================================== --> */}
    </>
  );
};

