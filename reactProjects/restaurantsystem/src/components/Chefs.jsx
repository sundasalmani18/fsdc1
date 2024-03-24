import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import restData from '../data/restaurantData.json'


export default function Chefs(){
  const chefData = restData.chef;
  const ourchef = restData.chef.ourchef;
    return(
    <>
      {/* <!-- =================================chefs==================================== --> */}
  <div id="Chefs">
    <div className="container section">
      <div className="chef-title">
        <h5 className="text-center icon">{chefData.title}</h5>
        <h1 className="text-center">{chefData.subtitle}</h1>
      </div>
      <div className="row g-4 p-5">
    
      {ourchef.length > 0 ? (ourchef.map((item, index) => (

        <div className=" col-md-3 wow fadeInUp" data-wow-delay="0.1s"
          style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
           
          <div className="chef-item rounded overflow-hidden p-3">
            <div className="rounded-circle overflow-hidden m-4 ">
              <img src={team1} className="img-fluid " alt=""/>
            </div>
            <h5 className="text-center">{item.name}</h5>
            <small className="text-center">{item.designation}</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href="">
              <i className={item.iconfacebook}></i>
                {/* <i className="fab fa-facebook-f"></i> */}
              </a>
              <a className="btn btn-square btn-primary  mx-1" href="">
              <i className={item.icontwitter}></i>
                {/* <i className="fab fa-twitter"></i> */}
              </a>
              <a className="btn btn-square btn-primary mx-1" href="">
              <i className={item.iconinsta}></i>
                {/* <i className="fab fa-instagram"></i> */}
              </a>
            </div>

          </div>
        </div>

        ))): null}
        {/* <div className=" col-md-3 wow fadeInUp" data-wow-delay="0.1s"
           style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
          <div className="chef-item rounded overflow-hidden p-3">
            <div className="rounded-circle overflow-hidden m-4 ">
              <img src={team2} className="img-fluid" alt=""/>
            </div>
            <h5 className="text-center">Full Name</h5>
            <small className="text-center">Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

          </div>
        </div>

        <div className=" col-md-3 wow fadeInUp" data-wow-delay="0.1s"
          style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
          <div className="chef-item rounded overflow-hidden p-3">
            <div className="rounded-circle overflow-hidden m-4 ">
              <img src={team3} className="img-fluid" alt=""/>
            </div>
            <h5 className="text-center">Full Name</h5>
            <small className="text-center">Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

          </div>
        </div>

        <div className=" col-md-3 wow fadeInUp" data-wow-delay="0.1s"
          style={{visibility:" visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
          <div className="chef-item rounded overflow-hidden p-3">
            <div className="rounded-circle overflow-hidden m-4 ">
              <img src={team4} className="img-fluid" alt=""/>
            </div>
            <h5 className="text-center">Full Name</h5>
            <small className="text-center">Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-primary mx-1" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div> */}

        
      </div>
    </div> 
  </div>
  {/* <!-- ================================= End chefs============================================ --> */}
    
    </>
    );
}