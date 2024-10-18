import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import dishes from "../assets/images/dishes.png"; 
export default function Banner() {
  return (
    <>
      {/* <!-- ========================================banner section=============================== --> */}
      <div id="banner" className="py-2">
        <div className="container ">
          <div className="row  justify-content-center align-items-center ">
            <div className="col-md-6">
              <div id="banner_heading">
                <p>Lets Enjoy Healthy  <br />
                  Delicious Food</p>
                <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae
                  cumque eum quaerat</p>
              </div>
              <div id="banner-button">
                <button type="button" className="mt-2 px-5 py-3">Book a table</button>
                <FontAwesomeIcon icon={faCirclePlay} className=" fa-solid "/>
                {/* <i className="fa-solid fa-circle-play "></i> */}
                <span style={{ color: "#fff", fontFamily: "Verdana, Geneva, Tahoma, sans-serif " }}>Watch video</span>
              </div>
            </div>

            <div className="col-md-5">
            
              <img src={dishes}  alt="" className="img-fluid rotating" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ================================banner section end================================= --> */}
    </>
  );
};

