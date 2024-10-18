import React from 'react'

const Skill = () => {
    return (
        <div id="skill" >
            <div class="container">
            <h2 class="text-center">Skills</h2>
            <div class="row justify-content-center pb-5">
                <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4" >My Skills</h2>
                </div>
                <div className='row d-flex'>
                    <div className='col-md-6'>
                        <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
                            <h3>React</h3>
                            <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  <span>85%</span>
</div>

                        </div>

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



                    <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

                </div>
            </div>
        </div>
</div>

    )
}

export default Skill