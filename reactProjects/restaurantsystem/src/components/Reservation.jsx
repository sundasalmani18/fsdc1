
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


export default function Reservation(){
    return(
  <>
  
  <div id="reservation">
    <div className="container section">
      <div className="row">
        <div className="col-md-6">
          <div className="reservation-video">
            <div className="btn-play">
            <FontAwesomeIcon icon={faCirclePlay} className=" fa-solid fa-5x"/>
              {/* <i className="fa-solid fa-circle-play fa-5x"></i> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 bg-dark">
          <div className="p-5">
            <h5 className="sectionheading ">Reservation</h5>
            <h1 className="text-white mb-2"> Book A Table Online</h1>
            <form action="">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" name="" id="" className="form-control"/>
                    <label>Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" name="" id="" className="form-control"/>
                    <label>Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" name="" id="" className="form-control"/>
                    <label>Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" name="" id="" className="form-control"/>
                    <label># of people</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input type="text" name="" id="" className="form-control"/>
                    <label>Special Request</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <button id="headbutton" className="py-3 w-100">Book Now</button>
                  </div>
                </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  </>

    );
}