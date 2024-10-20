import React from 'react'

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

const Education = () => {
    
  return (    
    <>
    <div id ="education">
      <div className='container '>
        <div className='row justify-content-center pb-5 '>
          <div className='col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated m-5'>
            <h2>Education</h2>
          </div>

        </div>
        <div className='row'> 
         
          <div className='col-md-6'>
            <div className='education-wrap ftco-animate fadeInUp ftco-animated'>
              <span className='degree'> Intermediate</span>
              <h2> Group :Pre-Engineering </h2>
              <h2> 2012-2013 </h2>
              <span className='position'> Hayat Girls College Hyd</span>   
            </div>
          </div>

          <div className='col-md-6'>
            <div className='education-wrap ftco-animate fadeInUp ftco-animated'>
              <span className='degree'> Bachalor Degree</span>
              <h2>Bachalor of Engineering in Software </h2>
              <span className='position'> Mehran University Of Engineering and Technology </span>
            
            </div>
          </div>
        </div>

      </div>
    </div>

   
</>
  )
}

export default Education