import React from 'react'

const Skill = () => {
    return (
        <div id="skill" >
            <div class="container ">
              
                <div class="row justify-content-center p-5">
                    <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h2 class="mb-4" >My Skills</h2>
                    </div>
                    <div className='row d-flex'>
                        <div className='col-md-6 mb-5'>
                            <div className='progress-wrap ftco-animate fadeInUp ftco-animated '>
                                <div className='skill_heading d-flex justify-content-between'>
                                <h4 className=''>HTML/CSS</h4>
                                <h4 class="">90%</h4>
                                </div>
                               
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    
                                </div>

                            </div>

                        </div>
                        <div className='col-md-6 mb-5'>
                            <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
                                <div className=' skill_heading d-flex justify-content-between'>
                                <h4>JavaScript </h4>
                                <h4>75%</h4>
                                </div>
                               
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                  
                                </div>

                            </div>

                        </div>
                        <div className='col-md-6 mb-5'>
                            <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
                                <div className='skill_heading d-flex justify-content-between'>
                                <h4>React </h4>
                                <h4>70%</h4>
                                </div>    
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                   
                                </div>

                            </div>

                        </div>
                        <div className='col-md-6 mb-5'>
                            <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
                                <div className=' skill_heading d-flex justify-content-between'>
                                <h4>Node js </h4>
                                <h4>80%</h4>
                                </div>
                                
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                 
                                </div>

                            </div>

                        </div>
                        <div className='col-md-6 mb-5'>
                            <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
                                <div className='skill_heading  d-flex justify-content-between'>
                                <h4>Database:My SQL/Mongo Db/Firebase </h4>
                                <h4>85%</h4>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                   
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
                                <div className=' skill_heading d-flex justify-content-between'>
                                <h4>WordPress </h4>
                                <h4>75%</h4>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                  
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>


    )
}

export default Skill