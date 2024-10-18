import React from 'react'

const Skill = () => {
    return (
        <section id="skills" class="container my-5">
            <h2 class="text-center">Skills</h2>
            <div class="row">
                <div class="col-md-6">
                    <h5>JavaScript</h5>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "80%;"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>Python</h5>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "70%;"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>HTML & CSS</h5>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "90%;"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>React</h5>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "75%;"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Skill