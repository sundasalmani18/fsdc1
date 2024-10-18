import React from 'react'


const Banner = () => {
  return (
    <div id="banner" className="py-2">
    <div className="container ">
      <div className="row  justify-content-center align-items-center ">
        <div className="col-md-8 mb-5">
          <div id="banner_heading">
            <p>Hello <br />
             I'm Sundas Almani</p>
            <h2> Full Stack Developer</h2>
          </div>
          <div id="banner-button">
            <button type="button" className="mt-2 px-5 py-3">My Resume</button>
            {/* <FontAwesomeIcon icon={faCirclePlay} className=" fa-solid "/> */}
            {/* <i className="fa-solid fa-circle-play "></i> */}
            {/* <span style={{ color: "#fff", fontFamily: "Verdana, Geneva, Tahoma, sans-serif " }}>Watch video</span> */}
          </div>
        </div>

        {/* <div className="col-md-5">
        
          <img src={user}  alt="" className="img-fluid rotating" />
        </div> */}
      </div>
    </div>
  </div>
  )
}

//Skills 
//education and experience 

export default Banner
