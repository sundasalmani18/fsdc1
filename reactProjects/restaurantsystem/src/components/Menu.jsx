 import menu1 from "../assets/images/menu-1.jpg";
 import menu2 from "../assets/images/menu-2.jpg";
 import menu3 from "../assets/images/menu-3.jpg";
 import menu4 from "../assets/images/menu-4.jpg";
 import menu5 from "../assets/images/menu-5.jpg";
 import menu6 from "../assets/images/menu-6.jpg";
 import menu7 from "../assets/images/menu-7.jpg";
 import menu8 from "../assets/images/menu-8.jpg";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

 export default function Menu(){

    return(
 <>
  {/* <!-- ====================================menu section ====================================== --> */}
  <div id="menu">
    <div className="container section d-flex justify-content-center ">
      <div className="row">
        <div className="menu-title">
          <h3 className=" title-heading text-center">Food Menu</h3>
          <h1 className="text-center pt-2">Most Popular Items</h1>
        </div>
        <div className="menu-nav pt-3  d-flex justify-content-center">
          <ul className="nav nav-tabs border-bottom mb-5" id="myTab" role="tablist">
            <li className="nav-item " role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                role="tab" aria-controls="home" aria-selected="true">
                  <FontAwesomeIcon icon={faMugSaucer} className="icon fa-2x " />
                {/* <i ="fa-solid fa-mug-saucer icon fa-2x"></i> */}
                {/* <div className=""> */}
                  <small>Popular</small>
                  <h6 className="mt-n1 mb-0">Breakfast</h6>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                role="tab" aria-controls="profile" aria-selected="false">
                  <FontAwesomeIcon icon={faBurger} className="icon fa-2x"/>
                {/* <i className="fa-solid fa-burger icon fa-2x"></i> */}
                <div className="">
                  <small>Special</small>
                  <h6 className="mt-n1 mb-0">Lunch</h6>
                </div>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                role="tab" aria-controls="contact" aria-selected="false">
                  <FontAwesomeIcon icon={faUtensils} className=" icon fa-2x"  />

                {/* <i className="fa fa-utensils me-3 icon fa-2x "></i> */}
                <div className="">
                  <small>Lovely</small>
                  <h6 className="mt-n1 mb-0">Dinner</h6>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src={menu1} alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src={menu2} alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src={menu3} alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src={menu4} alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src={menu5} alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src={menu6} alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src={menu7} alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src={menu8} alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-1.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-2.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-3.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-4.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-5.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-6.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-7.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-8.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-1.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-2.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-3.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-4.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-5.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-6.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-7.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img className="img-fluid rounded" src="./assets/images/menu-8.jpg" alt=""/>
                  <div className=" w-100 ps-4 d-flex flex-column ">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                      <span> Chicken burger</span>
                      <span className="icon"> $115</span>
                    </h5>
                    <small>Ipsum ipsum clita erat amet dolor justo diam</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
 {/* <!-- ================================================menu section end============================ --> */}
 </>

    );
}