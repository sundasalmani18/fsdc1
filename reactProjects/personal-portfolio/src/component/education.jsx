import React from 'react'
import portfoloioData from '../data/portfoliodata.json';
import axios from 'axios';
import  { useEffect, useState } from 'react';

const Education = ({educationDetails}) => {
  // const [educationData, setEducationData] = useState(null);


  // const fetchEducationData = async () => {
  //   const response = await axios.get('http://localhost:8080/portfolio');
  //   console.log(response.data[0].education,"response")
  //   setEducationData(response.data[0].education);
  // };


  // useEffect(() => {
  //   fetchEducationData();
  // }, []);
  // if (!educationData) {
  //   return <div>Loading Education...</div>;
  // }

  return (

        <div id ="education">
      <div className='container '>
        <div className='row justify-content-center pb-5 '>
          <div className='col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated m-5'>
            <h2>{educationDetails.title}</h2>
          </div>

        </div>
        <div className='row'> 

 
        {educationDetails.education_details.length > 0 ? (educationDetails.education_details.map((item, index) => (
          <div className='col-md-6'>
            <div className='education-wrap ftco-animate fadeInUp ftco-animated'>
            <span className='degree'> {item.degree}</span>
              <h2> {item.title} </h2>
              <h2> {item.year} </h2>
              <span className='position'> {item.position}</span> 
            </div>
          </div>

))) : null} 
        
       
        </div>

      </div>
    </div>

  );
};



//json data

// const Education = () => {
//   const educationData=portfoloioData.education;
//   const data=portfoloioData.education.education_details;
    
//   return (    
//     <>
//     <div id ="education">
//       <div className='container '>
//         <div className='row justify-content-center pb-5 '>
//           <div className='col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated m-5'>
//             <h2>{educationData.title}</h2>
//           </div>

//         </div>
//         <div className='row'> 

 
//         {data.length > 0 ? (data.map((item, index) => (
//           <div className='col-md-6'>
//             <div className='education-wrap ftco-animate fadeInUp ftco-animated'>
//             <span className='degree'> {item.degree}</span>
//               <h2> {item.title} </h2>
//               <h2> {item.year} </h2>
//               <span className='position'> {item.position}</span> 
//             </div>
//           </div>

// ))) : null} 
        
       
//         </div>

//       </div>
//     </div>

   
// </>
//   )
// }

export default Education