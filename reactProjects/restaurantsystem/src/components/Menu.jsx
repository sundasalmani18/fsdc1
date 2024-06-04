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
import { useEffect, useState } from "react";

export default function Menu() {

  const [tabStatus, setTabStatus] = useState("")

  const data = restData.menu;

  // const menuCategoryData = restData.menu.menuCategory;
  // const tabdata = restData.menu.menu.breakfast;
  // const catname = MenuData.menuCategory;

  const [menuCategoryData, setMenuCategoryData] = useState(restData.menu.menuCategory);
  const [tabdata, setTabdata] = useState(restData.menu.menuData.breakfast);
  const [tabid, setTabid] = useState(restData.menu.menuCategory);

  const [tab, setTab] = useState(1);

  // function updatemenu(id) {
  //   setTab(id);
  //   const updatetab = tabdata.map((item, i) =>
  //     i === id
  //       ? { ...item } : ""


  //   )
  //   console.log("tabData", updatetab)
  //   setTabdata(updatetab);

  // }


  // useEffect(() => (
  //   setTabdata(restData.menu.menuData[data.link])
  // ), [])

  function selectMenu(index, data) {
    // const category = menuCategoryData[index]
    const updateCategory = menuCategoryData.map((item, i) =>
      i === index
        ? { ...item, active: "true" }
        : { ...item, active: "false" }
    )
    console.log("updateCategory", updateCategory)
    setMenuCategoryData(updateCategory)
    setTabdata(restData.menu.menuData[data.link])
    setTabid(restData.menu.menuCategory[data.link])
    console.log("updateCategoryyyy", restData.menu.menuCategory)


    // idar only one parameter update horaha hai
    // const newArr = [...menuCategoryData];
    // newArr[index]["active"] = "true"

    // setMenuCategoryData(newArr)

  }

  return (
    <>
      {/* <!-- ====================================menu section ====================================== --> */}
      <div id="menu ">
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
                  <li key={index} className="nav-item " role="presentation">
                    <button
                      className={`nav-link ${(item.active) === "true" ? 'active' : ''} `}
                      id={`#${item.link}`}
                      type="button"
                      onClick={() => selectMenu(index, item)}
                    >
                      <div>
                        <i className={`${item.icon} icon fa-2x`} />
                      </div>
                      <small>{item.desc}</small>
                      <h6 className="mt-n1 mb-0">{item.categoryName}</h6>
                    </button>
                  </li>
                ))) : null}
              </ul>
            </div>

            <div className="tab-content" id="myTabContent">
         {console.log("hello",tabid)}

              <div className="tab-pane fade show active" id={tabid}>
          
                <div className="row g-4">
                  <div className="col-md-6">
                  
                    {tabdata.length > 0 ? (tabdata.slice(0, 4).map((item, index) => (

                      <div key={index} className="d-flex align-items-center">
                        <img className="rounded" style={{ width: "100px" }} src={item.image} alt="" />
                        <div className=" w-100 ps-4 d-flex flex-column ">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{item.title}</span>
                            <span className="icon">{item.price}</span>
                          </h5>
                          <small>{item.desc}</small>
                        </div>
                      </div>
                      
                    ))) : null}
                  </div>
                  <div className="col-md-6">
                  
                    {tabdata.length > 0 ? (tabdata.slice(4, 8).map((item, index) => (

                      <div key={index} className="d-flex align-items-center">
                        <img className="rounded" style={{ width: "100px" }} src={item.image} alt="" />
                        <div className=" w-100 ps-4 d-flex flex-column ">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{item.title}</span>
                            <span className="icon">{item.price}</span>
                          </h5>
                          <small>{item.desc}</small>
                        </div>
                      </div>
                      
                    ))) : null}
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