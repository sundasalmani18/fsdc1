// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import restData from '../data/restaurantData.json'

import 'react-multi-carousel/lib/styles.css';


export default function Service() {

  const [name, setName] = useState("")

  const ServicesData = restData.services;
  console.log({ ServicesData })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    // <!-- ===============================service section====================================== -->
    <div id="service">
      <div className="container section">
        <div className="row">
          <div className="owl-carousel owl-theme">
            <Carousel
              swipeable={false}
              draggable={true}
              showDots={false}
              arrows={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListclassName="custom-dot-list-style"
              itemclassName="carousel-item-padding-40-px"
            >
              {ServicesData.length > 0 ? (ServicesData.map((item, index) => (
                <div key={index} className="servicecol">
                  <div className="item  pt-3">
                    <div className="service-item p-4">
                      <i className="fa-solid fa-user-tie  icon fa-2x"></i>
                      <h4 className="p-2">{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))) : null}

              {/* <div className="servicecol">
                <div className="item pt-3">
                  <div className="service-item p-4">
                    <i className="fa fa-utensils icon fa-2x"></i>
                    <h4 className="p-2">Quality Food</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                  </div>
                </div>
              </div>
              <div className="servicecol">
                <div className="item pt-3">
                  <div className="service-item p-4">
                    <i className="fa-solid fa-cart-shopping icon fa-2x"></i>
                    <h4 className="p-2">Online Order</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                  </div>
                </div>
              </div>
              <div className="servicecol">
                <div className="item pt-3">
                  <div className="service-item p-4">
                    <i className="fa fa-2x fa-headset icon"></i>
                    <h4 className="p-2">24/7 Service</h4>
                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                  </div>
                </div>
              </div> */}

            </Carousel>
          </div>
        </div>
      </div>
    </div>
    //   <!-- ======================================service section end=================================== -->
  );
}