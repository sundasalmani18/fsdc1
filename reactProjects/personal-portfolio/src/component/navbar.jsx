import React from 'react'

const Navbar = () => {
  return (
    // <div id="header">
    //     <div className="container py-2">
    //       <div className="row">
    //         {/* <!-- <div className="col-md-2">
    //           <h2 id="logo" className="p-2" >Yummy.</h2>
    //         </div> --> */}
    //         <div className="col-md-12">
    //           <nav className="navbar navbar-expand-lg navbar-light">
    //           {/* <FontAwesomeIcon icon={faUtensils} className=" fa fa-2x m-3"  /> */}
    //             {/* <i className="fa fa-utensils me-3  fa-2x "></i> */}
    //             <a id="logo" className="navbar-brand" href="#">Sundas Almani.</a>
    //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    //               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //               <span className="navbar-toggler-icon"></span>
    //             </button>

    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //               <ul className="navbar-nav mr-auto ">
    //                 <li className="nav-item active">
    //                   <a className="nav-link" href="index.html">Home <span className="sr-only"></span></a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#about">About</a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#menu">Project</a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#service">Service</a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a className="nav-link" href="#service">Contact</a>
    //                 </li>
                   
    //               </ul>
                  
    //               <form className="form-inline my-2  my-lg-0 m-3 ">

    //                 <a id="headbutton" href="#reservation" className="btn-sm btn btn-outline-success m-2 ">Book Table</a>
    //                 {/* <a id="headbutton" href={<Login />} className="btn-sm btn btn-outline-success ">Login/Register</a> */}
    //                 {/* <a id="headbutton"  className="btn-sm btn btn-outline-success ">Login/Register</a> */}
                    
    //                 {/* <a id="headbutton" href="./admin/adminLogin.html" className="btn-sm btn btn-outline-success">Admin Portal</a> */}
    //                 {/* <a id="headbutton" className="btn-sm btn btn-outline-success">Admin Portal</a> */}
    //               </form>
               
    //             </div>
    //           </nav>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
<div id='header'>
<div class="container">
<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  ">
  <div class="col-md-3 mb-2 mb-md-0">
    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
     <a id="logo" className="navbar-brand" href="index.html">Sundas Almani.</a>
      {/* <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
    </a>
  </div>
<div className='navbar-nav'>
  <ul className="navbar col-12 col-md-auto mb-2 justify-content-center mb-md-0">
  
    {/* <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
    <li><a href="#" class="nav-link px-2">Features</a></li>
    <li><a href="#" class="nav-link px-2">Pricing</a></li>
    <li><a href="#" class="nav-link px-2">FAQs</a></li>
    <li><a href="#" class="nav-link px-2">About</a></li> */}
    {/* <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only"></span></a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link px-2" href="#education">Education  and Experience</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link px-2" href="#experience">Experience</a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link px-2" href="#project">Project</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2" href="#skill">Skill</a>
                    </li>
                    
  </ul>
  </div>

  <div class="col-md-3 text-end">
    {/* <button type="button" class="btn btn-outline-primary me-2">Login</button> */}
    <button id ="headbutton" type="button" className="btn btn-primary p-3">Technical Support System</button>
  </div>
</header>
</div>
</div>
  )
}

export default Navbar