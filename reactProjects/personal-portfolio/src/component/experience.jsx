import React from 'react'

const Experience = () => {
  return (
    <>
  <div id="testimonail">
    <div class="container section ">
      <div class="testimonail-title">
        <h5 class="text-center">Experience</h5>
        {/* <h1 class="text-center">Our Clients Say</h1> */}
      </div>
      <div class="row ">
        <div class="owl-carousel owl-theme">
          <div class="owl-item active">
            <div class="testimonial-item bg-transparent border rounded p-4">
              <div class="d-flex align-items-center">
                {/* <img class="img-fluid flex-shrink-0 rounded-circle" style={{width: "50px;" ,height: "50px;"}}
                  src="./assets/images/testimonial-1.jpg" alt=""/> */}
                <div class="ps-3">
                  <h5>Intern Developer</h5>
                  <small>Verge System </small>
                  <p class="card-text"><strong>January 2021 - May 2021</strong></p>
                  <li>Assisted in the development of mobile applications.</li>
                <li>Participated in code reviews and contributed to team meetings.</li>
                 <li>Learned best practices in software development and version control.</li>
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
                  <li>Developed and maintained web applications using JavaScript, HTML, and CSS.</li>
                        <li>Collaborated with cross-functional teams to design and implement new features.</li>
                        <li>Optimized application performance and improved user experience.</li>
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
