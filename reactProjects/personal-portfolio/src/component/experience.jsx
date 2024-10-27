import React from 'react'
import portfoloioData from '../data/portfoliodata.json';
import axios from 'axios';
import  { useEffect, useState } from 'react';

const Experience = () => {
  const [experienceData, setExperienceData] = useState(null);


  const fetchExperienceData = async () => {
    const response = await axios.get('http://localhost:8080/portfolio');
    console.log(response.data[0].experience,"response")
    setExperienceData(response.data[0].experience);
  };


  useEffect(() => {
    fetchExperienceData();
  }, []);
  if (!experienceData) {
    return <div>Loading Experience...</div>;
  }

  return (

        <div id ="experience">
      <div className='container '>
        <div className='row justify-content-center pb-5 '>
          <div className='col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated m-5'>
            <h2>{experienceData.title}</h2>
          </div>

        </div>
        <div className='row'> 

 
        {experienceData.experience_details.length > 0 ? (experienceData.experience_details.map((item, index) => (
          <div className='col-md-6'>
            <div className='experience-wrap ftco-animate fadeInUp ftco-animated'>
            <span className='date'>{item.date}</span>
               <h2>{item.designation} </h2>
               <span className='position'> {item.position}</span><br/>
               <small>{item.description1}</small><br/>
               <small>{item.description2}</small><br/>
                 <small>{item.description3}.</small><br/>
                 <small>{item.description4}.</small><br/> 
            </div>
          </div>

))) : null} 
        
       
        </div>

      </div>
    </div>

  );
};


//json
// const Experience = () => {
//   const experiencenData=portfoloioData.experience;
//   const data=portfoloioData.experience.experience_details;
    
 
       
      
//   return (
//     <>
//    <div id ="experience">
//       <div className='container '>
//         <div className='row justify-content-center pb-5 '>
//           <div className='col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated'>
//             <h2>{experiencenData.title}</h2>

//           </div>

//         </div>
//         <div className='row'> 
//         {data.length > 0 ? (data.map((item, index) => (
//           <div className='col-md-6'>
//             <div className='experience-wrap ftco-animate fadeInUp ftco-animated'>
//               <span className='date'>{item.date}</span>
//               <h2>{item.designation} </h2>
//               <span className='position'> {item.position}</span><br/>
//               <small>{item.description1}</small><br/>
//               <small>{item.description2}</small><br/>
//                 <small>{item.description3}.</small><br/>
//                  <small>{item.description4}.</small><br/>
//             </div>
//           </div>

// ))) : null} 
//           {/* <div className='col-md-6'>
//             <div className='experience-wrap ftco-animate fadeInUp ftco-animated'>
//               <span className='date'> 2018-2019</span><br/>
//               <h2>Junior Developer </h2>
//               <span className='position'> Verge System</span><br/>
//               <small>Developed and maintained web applications using JavaScript, HTML, and CSS.</small><br/>
//               <small>Collaborated with teams to design and implement new features.</small><br/>
//                <small>Optimized application performance and improved user experience.</small><br/>
//             </div>
//           </div> */}
//         </div>

//       </div>
//     </div>

   
// </>
//   )

// }
export default Experience
