import React from 'react'
import education from '../css/images/education.jpg'

const Education = () => {
  return (
    <section id="education">
    <div class="container ">
    <h2 class="text-center mb-3">Education</h2>
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
        <div class="col-md-6">
            <div class="card ">
                <div class="card-body">
                <img src={education}  alt="" className="img-fluid rotating" />
                    {/* <h5 class="card-title">Master of Science in Software Engineering</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Example University</h6>
                    <p class="card-text">Expected Graduation: May 2023</p>
                    <p class="card-text">Focus: Full-Stack Development, Cloud Computing</p> */}
                </div>
            </div>
        </div>
    </div>
    </div>
</section>

  )
}

export default Education