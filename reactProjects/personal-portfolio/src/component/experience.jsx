import React from 'react'

const Experience = () => {
  return (
    <section id="experience" class="container my-5">
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
</section>

  )
}

export default Experience
