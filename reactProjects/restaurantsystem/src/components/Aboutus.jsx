import about1 from "../assets/images/about-1.jpg";
import about2 from "../assets/images/about-2.jpg";
import about3 from "../assets/images/about-3.jpg";
import about4 from "../assets/images/about-4.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import restData from '../data/restaurantData.json'
export default function About() {

  const aboutData = restData.about;
  const experices = aboutData.experices;
  const chef = aboutData.chef;
  console.log(aboutData);

  return (
    <>
      {/*  
 <!-- ==================================about section =============================================== --> */}

      <div id="about">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-md-6">
              <div className="about-1img m-2">
                <img src={about1} className=" img-fluid rounded float-left " alt="" />
                <img src={about2} className=" img-fluid rounded float-left m-2" alt="" />
              </div>
              <div className="about-2img m-2">
                <img src={about3} className=" img-fluid rounded float-left " alt="" />
                <img src={about4} className=" img-fluid rounded float-left m-2" alt="" />
              </div>
            </div>
            {/* {AboutData.length > 0 ? (AboutData.map((item, index) => ( */}
            <div className="col-md-6">
              <h2 className="sectionheading mb-4">{aboutData.title}</h2>
              <h1 className="mb-4">{aboutData.subtitle}
                {/* <i className="fa fa-utensils icon"></i> */}
                < FontAwesomeIcon icon={faUtensils} className=" icon" />
              </h1>
              <div dangerouslySetInnerHTML={{ __html: aboutData.desc }} />
              {/* <p className="mb-4">{aboutData.desc}</p> */}
              {/* <p>{item.desc2}</p> */}
              <div className="row">
                <div className="col-sm-6">
                  <div className="d-flex">
                    <h1 className="icon">{experices.years}</h1>
                    <div className="ps-4">
                      <div dangerouslySetInnerHTML={{ __html: experices.desc }} />
                      {/* <p className="mb-0">{aboutData.titleyear}</p>
                      <h5>{aboutData.titleexperience}</h5> */}
                    </div>

                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">

                    <h1 className="icon">{chef.year}</h1>
                    <div className="ps-4">
                      <div dangerouslySetInnerHTML={{ __html: chef.desc }} />
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="readbutton mt-2 px-5 py-3">{aboutData.buttonLabel}</button>
            </div>
            {/* ))) : null} */}
          </div>
        </div>
      </div>


      {/* <!-- ======================================about section end================================ --> */}

    </>
  );
}
