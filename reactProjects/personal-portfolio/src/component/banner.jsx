import React from 'react'

const Banner = () => {
  return (
    <div id="banner" className="py-2">
    <div className="container ">
      <div className="row  justify-content-center align-items-center ">
        <div className="col-md-6">
          <div id="banner_heading">
            <h2>Enjoy Your Healthy <br />
              Delicious Food</h2>
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae
              cumque eum quaerat</p>
          </div>
          <div id="banner-button">
            <button type="button" className="mt-2 px-5 py-3">Book a table</button>
            {/* <FontAwesomeIcon icon={faCirclePlay} className=" fa-solid "/> */}
            {/* <i className="fa-solid fa-circle-play "></i> */}
            <span style={{ color: "#fff", fontFamily: "Verdana, Geneva, Tahoma, sans-serif " }}>Watch video</span>
          </div>
        </div>

        <div className="col-md-5">
        
          {/* <img src={dishes}  alt="" className="img-fluid rotating" /> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner
