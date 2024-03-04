import  about1 from "../assets/images/about-1.jpg";
import  about2 from "../assets/images/about-2.jpg";
import  about3 from "../assets/images/about-3.jpg";
import  about4 from "../assets/images/about-4.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
export default function About(){

    return(
        <>   
{/*  
 <!-- ==================================about section =============================================== --> */}
 
  <div id="about">
    <div className="container">
      <div className="row  align-items-center">
        <div className="col-md-6">
          <div className="about-1img m-2">
            <img src= {about1} className=" img-fluid rounded float-left " alt=""/>
            <img src={about2} className=" img-fluid rounded float-left m-2" alt=""/>
          </div>
          <div className="about-2img m-2">
            <img src={about3} className=" img-fluid rounded float-left " alt=""/>
            <img src={about4} className=" img-fluid rounded float-left m-2" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="sectionheading mb-4">About Us</h2>
          <h1 className="mb-4">Welcome to
          <FontAwesomeIcon icon={faUtensils} className=" icon"  />
            {/* <i className="fa fa-utensils icon"></i> */}
             Restoran
          </h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
            diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem
            et sit, sed stet lorem sit clita duo justo magna
            dolore erat amet</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex">
                <h1 className="icon">15</h1>
                <div className="ps-4">
                  <p className="mb-0">Years of</p>
                  <h5>Experience</h5>
                </div>

              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex">
                <h1 className="icon">50</h1>
                <div className="ps-4">
                  <p className="mb-0">Popular</p>
                  <h5>MASTER CHEFS</h5>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="readbutton mt-2 px-5 py-3">Read More</button>
        </div>
      </div>
    </div>
  </div>
  
 
  {/* <!-- ======================================about section end================================ --> */}
  
  </>
    );
}
