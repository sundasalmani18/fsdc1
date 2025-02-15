import React from 'react'
import portfoloioData from '../data/portfoliodata.json';
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = ({ navData, toggleData ,isLocalData}) => {
  const navigate =useNavigate()
  // const [navData, setNavData] = useState(null);


  // const fetchNavData = async () => {
  //   const response = await axios.get('http://localhost:8080/portfolio');
  //   console.log(response.data[0].nav,"response")
  //   setNavData(response.data[0].nav);
  // };


  // useEffect(() => {
  //   fetchNavData();
  // }, []);
  // if (!navData) {
  //   return <div>Loading Nav...</div>;
  // }

  return (
   

    <div id='header'>
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  ">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
         <a id="logo" className="navbar-brand" href="index.html">{navData.name}</a>
        </a>
      </div>
    <div className='navbar-nav'>
      <ul className="navbar col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      
      {navData.nav_li.length > 0 ? (navData.nav_li.map((item, index) => (
                        <li className="nav-item">
                          <a className="nav-link px-2" href={item.href}>{item.title} </a>
                        </li>
                         ))) : null} 
                        {/* <li className="nav-item">
                          <a className="nav-link px-2" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link px-2" href="#project">Project</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link px-2" href="#skill">Skill</a>
                        </li> */}
                        
      </ul>
      </div>

      <div className="form-check form-switch">
        <span className="toggle-title">
          {isLocalData ? 'Offline Data' : 'Online Data'}
        </span>
        <input
          className="form-check-input"
          type="checkbox"
          onChange={toggleData} // Toggle state on checkbox change
          role="switch"
          id="flexSwitchCheckChecked"
          checked={isLocalData} // Toggle the switch based on the state
        />
      </div>

      {/* <div class="form-check form-switch">
      <span className="toggle-title">
          {isLocalData ? 'offline Data' : 'Online Data'}
        </span>
    <input class="form-check-input" type="checkbox" onChange={toggleData} role="switch" id="flexSwitchCheckChecked" checked />
    
  </div> */}
     
      {/* <button   class="form-check-input" type="checkbox" onClick={toggleData} role="switch">
                Switch to {isLocalData ? 'MongoDB Data' : 'Local Data'}
            </button> */}
    
      <div class="col-md-3 text-end">
    
        <button id ="headbutton"  onClick={()=>navigate("/technicalsupport")} type="button" className="btn btn-primary p-3">{navData.button}</button>
      </div>
   
    </header>
    </div>
    </div>

  );
};








//json data
// const Navbar = () => {
//   const navData=portfoloioData.nav;
//   const data=portfoloioData.nav.nav_li;
//   return (
   
// <div id='header'>
// <div class="container">
// <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  ">
//   <div class="col-md-3 mb-2 mb-md-0">
//     <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
//      <a id="logo" className="navbar-brand" href="index.html">{navData.name}</a>
//     </a>
//   </div>
// <div className='navbar-nav'>
//   <ul className="navbar col-12 col-md-auto mb-2 justify-content-center mb-md-0">
  
//   {data.length > 0 ? (data.map((item, index) => (
//                     <li className="nav-item">
//                       <a className="nav-link px-2" href={item.href}>{item.title} </a>
//                     </li>
//                      ))) : null} 
//                     {/* <li className="nav-item">
//                       <a className="nav-link px-2" href="#experience">Experience</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link px-2" href="#project">Project</a>
//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link px-2" href="#skill">Skill</a>
//                     </li> */}
                    
//   </ul>
//   </div>

//   <div class="col-md-3 text-end">

//     <button id ="headbutton" type="button" className="btn btn-primary p-3">{navData.button}</button>
//   </div>
// </header>
// </div>
// </div>
//   )
// }

export default Navbar