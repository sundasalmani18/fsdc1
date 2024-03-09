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
import restData from '../data/restaurantData.json'
import { useState } from "react";

export default function Menu() {

  const [tabStatus, setTabStatus] = useState("")

  const data = restData.menu;

  const menuCategoryData = restData.menu.menuCategory;
  const tabdata = restData.menu.menu.breakfast;
     // const catname = MenuData.menuCategory;
     const [tab,setTab]=useState(1);
     function updatemenu(id){
         setTab(id);
     }

  return (
    <>
      {/* <!-- ====================================menu section ====================================== --> */}
      <div id="menu">
        <div className="container section d-flex justify-content-center ">
          <div className="row">

            <div className="menu-title">
              <h3 className=" title-heading text-center">{data.title}</h3>
              <h1 className="text-center pt-2">{data.subtitle}</h1>
            </div>

            {/* active */}

            <div className="menu-nav pt-3  d-flex justify-content-center">
              <ul className="nav nav-tabs border-bottom mb-5" id="myTab" role="tablist">
                {menuCategoryData.length > 0 ? (menuCategoryData.map((item, index) => (
                  <li key={index} className="nav-item " role="presentation" onclick="updatemenu({})">
                    <button
                      // id="home-tab"
                      // className="nav-link active"
                      className={`nav-link ${item.active ? 'active' : ''} ` }   
                      id={item.link}
                      data-bs-toggle="tab"
                      // data-bs-target="#home" 
                      data-bs-target={`#${item.categoryName}`}
                      type="button"
                      role="tab"
                      aria-controls={item.categoryName}
                      aria-selected="true">
                      {/* <FontAwesomeIcon icon={faBurger} className="icon fa-2x " /> */}
                      {/* <i class="fa-solid fa-burger icon fa-2x" /> */}
                      <div>
                        <i class={`${item.icon} icon fa-2x`} />
                      </div>
                      <small>{item.desc}</small>
                      <h6 className="mt-n1 mb-0">{item.categoryName}</h6>
                    </button>
                  </li>
                ))) : null}
              </ul>
            </div>

            {/* <div className="menu-nav pt-3  d-flex justify-content-center">
              <ul className="nav nav-tabs border-bottom mb-5" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                    role="tab" aria-controls="profile" aria-selected="false">
                    <FontAwesomeIcon icon={faBurger} className="icon fa-2x" />
                    <i className="fa-solid fa-burger icon fa-2x"></i>
                    <div className="">
                      <small>Special</small>
                      <h6 className="mt-n1 mb-0">Lunch</h6>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                    role="tab" aria-controls="contact" aria-selected="false">
                    <FontAwesomeIcon icon={faUtensils} className=" icon fa-2x" />

                    <i className="fa fa-utensils me-3 icon fa-2x "></i>
                    <div className="">
                      <small>Lovely</small>
                      <h6 className="mt-n1 mb-0">Dinner</h6>
                    </div>
                  </button>
                </li>
              </ul>
            </div> */}


            <div className="tab-content" id="myTabContent">
            
              <div className="tab-pane fade show active" id="Breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
               
              {tabdata.length > 0 ? (tabdata.map((item, index) => ( 
              <div  className="row g-4">
              
                  <div className="col-md-6">
                

                    <div className="d-flex align-items-center">
                      <img className="img-fluid rounded width:10px" src={item.image} alt="" />
                      <div className=" w-100 ps-4 d-flex flex-column ">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span> {item.title}</span>
                          <span className="icon"> {item.price}</span>
                        </h5>
                        <small>{item.desc}</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <img className="img-fluid rounded" src={item.image} alt="" />
                      <div className=" w-100 ps-4 d-flex flex-column ">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span> {item.title}</span>
                          <span className="icon"> {item.price}</span>
                        </h5>
                        <small>{item.desc}</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <img className="img-fluid rounded" src={item.image} alt="" />
                      <div className=" w-100 ps-4 d-flex flex-column ">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span> {item.title}</span>
                          <span className="icon"> {item.price}</span>
                        </h5>
                        <small>{item.desc}</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <img className="img-fluid rounded" src={item.image} alt="" />
                      <div className=" w-100 ps-4 d-flex flex-column ">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span> {item.title}</span>
                          <span className="icon"> {item.price}</span>
                        </h5>
                        <small>{item.desc}</small>
                      </div>
                    </div>
 
                  </div>



                  <div className="col-md-6">

                  <div className="d-flex align-items-center">
                      <img className="img-fluid rounded" src={item.image} alt="" />
                      <div className=" w-100 ps-4 d-flex flex-column ">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span> {item.title}</span>
                          <span className="icon"> {item.price}</span>
                        </h5>
                        <small>{item.desc}</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <img className="img-fluid rounded" src={item.image} alt="" />
                      <div className=" w-100 ps-4 d-flex flex-column ">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span> {item.title}</span>
                          <span className="icon"> {item.price}</span>
                        </h5>
                        <small>{item.desc}</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <img className="img-fluid rounded" src={item.image} alt="" />
                      <div className=" w-100 ps-4 d-flex flex-column ">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span> {item.title}</span>
                          <span className="icon"> {item.price}</span>
                        </h5>
                        <small>{item.desc}</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <img className="img-fluid rounded" src={item.image} alt="" />
                      <div className=" w-100 ps-4 d-flex flex-column ">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span> {item.title}</span>
                          <span className="icon"> {item.price}</span>
                        </h5>
                        <small>{item.desc}</small>
                      </div>
                    </div>

                  </div>
              
                </div>
                ))) : null} 
              </div>
             


              {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <img className="img-fluid rounded" src="./assets/images/menu-1.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-2.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-3.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-4.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-5.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-6.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-7.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-8.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-1.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-2.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-3.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-4.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-5.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-6.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-7.jpg" alt="" />
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
                      <img className="img-fluid rounded" src="./assets/images/menu-8.jpg" alt="" />
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
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ================================================menu section end============================ --> */}
    </>

  );
}