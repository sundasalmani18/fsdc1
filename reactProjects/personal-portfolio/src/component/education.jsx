import React from 'react'
import education from '../css/images/education.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Education = () => {
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
    <>

    <div id="education">
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
              autoPlaySpeed={500}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListclassName="custom-dot-list-style"
              itemclassName="carousel-item-padding-40-px"
            >
         
            <div className="servicecol ">
              <div className="item pt-3">
                <div className="service-item p-4">
                  <i className="fa fa-utensils icon fa-2x"></i>
                  <h4 className="p-2">Bachelor</h4>
                  <h5>Bachelor of Engineering in Software Engineering</h5>
                 < h6 class="card-subtitle mb-2 text-muted">Mehran University Of Engineering and Technology</h6>
                    <p class="card-text  m-2">Graduated: May 2020</p>
                    <p class="card-text  m-2">Focus: Full-Stack Development</p>
                </div>
              </div>
            </div>
            <div className="servicecol">
              <div className="item pt-3 ">
                <div className="service-item p-4">
                  <i className="fa fa-utensils icon fa-2x"></i>
                  <h4 className="p-2">Bachelor</h4>
                  <h5>Bachelor of Engineering in Software Engineering</h5>
                 < h6 class="card-subtitle mb-2 text-muted">Mehran University Of Engineering and Technology</h6>
                    <p class="card-text  m-2">Graduated: May 2020</p>
                    <p class="card-text  m-2">Focus: Full-Stack Development</p>
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
            </div> 
            </Carousel>

        </div>
      </div>
    </div>
  </div>







    {/* <div id="education ">
    <div class="container section">
    <h2 class="text-center m-5">Education</h2>
    <div class="row">
        <div class="col-md-6 ">
            <div class="card">
                <div class="card-body m-4">
                    <h5 class="card-title  mb-2">Bachelor of Engineering in Software Engineering</h5><br/>
                    <h6 class="card-subtitle mb-2 text-muted">Mehran University Of Engineering and Technology</h6>
                    <p class="card-text  m-2">Graduated: May 2020</p>
                    <p class="card-text  m-2">Focus: Full-Stack Development</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 ">
            <div class="card">
                <div class="card-body m-4">
                    <h5 class="card-title  mb-2">Bachelor of Engineering in Software Engineering</h5><br/>
                    <h6 class="card-subtitle mb-2 text-muted">Mehran University Of Engineering and Technology</h6>
                    <p class="card-text  m-2">Graduated: May 2020</p>
                    <p class="card-text  m-2">Focus: Full-Stack Development</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</div> */}
</>
  )
}

export default Education