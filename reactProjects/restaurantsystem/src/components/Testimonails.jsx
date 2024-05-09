import tsetimonials1 from "../assets/images/testimonial-1.jpg";
import tsetimonials2 from "../assets/images/testimonial-2.jpg";
import tsetimonials3 from "../assets/images/testimonial-3.jpg";
import tsetimonials4 from "../assets/images/testimonial-4.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import restData from '../data/restaurantData.json'

export default function Testimonials(){

  const testimonialsData = restData.testimonials;
  const ourtestimonials = restData.testimonials.ourTestimonials;


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
    return(
  <>
  
  {/* <!-- ====================================testimonails=================================== --> */}

 <div id="testimonail">
  <div className="container section ">
    <div className="testimonail-title">
      <h5 className="text-center">{testimonialsData.title}</h5>
      <h1 className="text-center">{testimonialsData.subtitle}</h1>
    </div>
    <div className="row ">
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
              {ourtestimonials.length > 0 ? (ourtestimonials.map((item, index) => (
        <div className="owl-item active">
        
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className= {item.icon}></i>
            <p>{item.description}</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px", height: "50px"}}
                src={item.image} alt=""/>
              <div className="ps-3">
                <h5>{item.name}</h5>
                <small>{item.profession}</small>
              </div>
            </div>
          </div>
        
        
        </div>
          ))): null}

        {/* <div className="owl-item cloned">
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x icon mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px", height: "50px"}}
                src={tsetimonials2} alt=""/>
              <div className="ps-3">
                <h5>Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </div>

        <div className="owl-item cloned">
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x icon mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px", height: "50px"}}
                src={tsetimonials3} alt=""/>
              <div className="ps-3">
                <h5>Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </div>


        <div className="owl-item cloned">
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left icon fa-2x  mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px", height: "50px"}}
                src={tsetimonials4} alt=""/>
              <div className="ps-3">
                <h5>Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </div> */}

        </Carousel>
      
      </div>
    </div>
  </div>
</div> 
{/* <!-- ====================================testimonails=================================== --> */}
  
  </>
    );
}