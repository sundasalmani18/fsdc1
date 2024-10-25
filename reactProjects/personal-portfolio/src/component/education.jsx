import React from 'react'
import portfoloioData from '../data/portfoliodata.json';



const Education = () => {
  const educationData=portfoloioData.education;
  const data=portfoloioData.education.education_detials;
    
  return (    
    <>
    <div id ="education">
      <div className='container '>
        <div className='row justify-content-center pb-5 '>
          <div className='col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated m-5'>
            <h2>{educationData.title}</h2>
          </div>

        </div>
        <div className='row'> 

 
        {data.length > 0 ? (data.map((item, index) => (
          <div className='col-md-6'>
            <div className='education-wrap ftco-animate fadeInUp ftco-animated'>
            <span className='degree'> {item.degree}</span>
              <h2> {item.title} </h2>
              <h2> {item.year} </h2>
              <span className='position'> {item.position}</span> 
            </div>
          </div>

))) : null} 
        
        {/* {data.length > 0 ? (data.map((item, index) => (
          <div className='col-md-6 '>
         
          <div className='education-wrap ftco-animate fadeInUp ftco-animated'>  
 
              <span className='degree'> {item.degree}</span>
              <h2> {item.title} </h2>
              <h2> {item.year} </h2>
              <span className='position'> {item.position}</span> 
               
          </div>
          </div> 
        
      ))) : null}  */}
    
  
          {/* <div className='col-md-6'>
            <div className='education-wrap ftco-animate fadeInUp ftco-animated'>
              <span className='degree'> Bachalor Degree</span>
              <h2>Bachalor of Engineering in Software </h2>
              <span className='position'> Mehran University Of Engineering and Technology </span>
            
            </div>
          </div> */}
        </div>

      </div>
    </div>

   
</>
  )
}

export default Education