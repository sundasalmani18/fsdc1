import React from 'react'
import Carousel from 'react-multi-carousel';

const Experience = () => {

 
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
      
        // if (testionails.length === 0) {
        //   return null
        // }
      
  return (
    <>
  <div id="experience">
    <div class="container section ">
      <div class="testimonail-title">
        <h5 class="text-center mb-5">Experience</h5>
        {/* <h1 class="text-center">Our Clients Say</h1> */}
      </div>
      <div class="row ">
        <div class="owl-carousel owl-theme">
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
          <div class="owl-item active">
            <div class="testimonial-item bg-transparent border rounded p-4">
              <div class="d-flex align-items-center">
                {/* <img class="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px;" ,height: "50px;"}}
                  src="./assets/images/testimonial-1.jpg" alt=""/> */}
                <div class="ps-3">
                  <h5>Intern Developer</h5>
                  <small>Verge System </small>
                  <p class="card-text"><strong>January 2021 - May 2021</strong></p>
                  <small>Assisted in the development of mobile applications.</small><br/>
                <small>Participated in code reviews and contributed to team meetings.</small><br/>
                 <small>Learned best practices in software development and version control.</small><br/>
                </div>
              </div>
            </div>
          </div>

          <div class="owl-item cloned">
            <div class="testimonial-item bg-transparent border rounded p-4">
              <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px;" ,height: "50px;"}}
                  src="./assets/images/testimonial-2.jpg" alt=""/>
                <div class="ps-3">
                  <h5>Junior Developer</h5>
                  <small>Verge System </small>
                  <p class="card-text"><strong>June 2021 -January 2022</strong></p>
                  <small>Developed and maintained web applications using JavaScript, HTML, and CSS.</small><br/>
                        <small>Collaborated with teams to design and implement new features.</small><br/>
                        <small>Optimized application performance and improved user experience.</small><br/>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="owl-item cloned">
            <div class="testimonial-item bg-transparent border rounded p-4">
              <i class="fa fa-quote-left fa-2x icon mb-3"></i>
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px;", height: "50px;"}}
                  src="./assets/images/testimonial-3.jpg" alt=""/>
                <div class="ps-3">
                  <h5>Client Name</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div> */}


          {/* <div class="owl-item cloned">
            <div class="testimonial-item bg-transparent border rounded p-4">
              <i class="fa fa-quote-left icon fa-2x  mb-3"></i>
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div class="d-flex align-items-center">
                <img class="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px;" ,height: "50px;"}}
                  src="./assets/images/testimonial-4.jpg" alt=""/>
                <div class="ps-3">
                  <h5>Client Name</h5>
                  <small>Profession</small>
                  <li>Assisted in the development of mobile applications.</li>
                        <li>Participated in code reviews and contributed to team meetings.</li>
                        <li>Learned best practices in software development and version control.</li>
                </div>
              </div>
            </div>
          </div> */}
  </Carousel>
        </div>
      </div>
    </div>
  </div>


    {/* <section id="experience" class="container my-5">
    <h2 class="text-center">Experience</h2>
    <div class="row">
        <div class="col-md-6">
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Software Engineer</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Tech Company, City</h6>
                    <p class="card-text"><strong>June 2021 - Present</strong></p>
                    <ul>
                        <li>Developed and maintained web applications using JavaScript, HTML, and CSS.</li>
                        <li>Collaborated with cross-functional teams to design and implement new features.</li>
                        <li>Optimized application performance and improved user experience.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Intern Developer</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Another Tech Company, City</h6>
                    <p class="card-text"><strong>January 2021 - May 2021</strong></p>
                    <ul>
                        <li>Assisted in the development of mobile applications.</li>
                        <li>Participated in code reviews and contributed to team meetings.</li>
                        <li>Learned best practices in software development and version control.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section> */}
</>
  )

}
export default Experience
