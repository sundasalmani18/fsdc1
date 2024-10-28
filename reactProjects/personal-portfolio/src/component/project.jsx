import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react';
import project1 from "../css/images/project1.png";
import project2 from "../css/images/project2.png";
import project3 from "../css/images/project3.png";
import project4 from "../css/images/project4.png";
import portfoloioData from '../data/portfoliodata.json';




const Project = ({ projectDetails }) => {
  // const [projectData, setProjectData] = useState(null);


  // const fetchProjectData = async () => {
  //   const response = await axios.get('http://localhost:8080/portfolio');
  //   console.log(response.data[0].project,"response")
  //   setProjectData(response.data[0].project);
  // };


  // useEffect(() => {
  //   fetchProjectData();
  // }, []);
  // if (!projectData) {
  //   return <div>Loading project...</div>;
  // }

  return (

    <div id="project">
    <div className='container'>
      <div className='row justify-content-center pb-5'>
        <div className='col-md-12 heading-section text-center '>
          <h2 className='mb-5'>{projectDetails.title}</h2>
        </div>
        <div className='row'>
        {projectDetails.project_details.length > 0 ? (projectDetails.project_details.map((item, index) => (
          <div className='col-md-6'>
          <div className='project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated'>
            <img src={item.img} className=" img-fluid rounded float-left " alt="" />         
           </div>
            <h3 className='m-4 heading'>{item.title}</h3>
          </div>
        ))) : null}   
          {/* <div className='col-md-6'>
            <div className='project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated'>
            <img src={project2} className=" img-fluid rounded float-left " alt="" />
           </div>
            <h3 className='m-4 heading'>Restaurant Management System</h3>

          </div>

          <div className='col-md-6'>
            <div className='project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated'>
            <img src={project3} className=" img-fluid rounded float-left " alt="" />
           </div>
            <h3 className='m-4 heading'>Ecommerce App Node js and React </h3>

          </div>

          <div className='col-md-6'>
          <div className='project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated'>
            <img src={project4} className=" img-fluid rounded float-left " alt="" />
           </div>
            <h3 className='m-4 heading'>Employee system with Mongo Db  </h3>
          </div> */}

        </div>

      </div>

    </div>

  </div>

  );
};



//json
// const Project = () => {
//   const projectData=portfoloioData.project;
//   const data=portfoloioData.project.project_details;
//   return (
//     <div id="project">
//       <div className='container'>
//         <div className='row justify-content-center pb-5'>
//           <div className='col-md-12 heading-section text-center '>
//             <h2 className='mb-5'>{projectData.title}</h2>
//           </div>
//           <div className='row'>
//           {data.length > 0 ? (data.map((item, index) => (
//             <div className='col-md-6'>
//             <div className='project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated'>
//               <img src={item.img} className=" img-fluid rounded float-left " alt="" />         
//              </div>
//               <h3 className='m-4 heading'>{item.title}</h3>
//             </div>
//           ))) : null}   
//             {/* <div className='col-md-6'>
//               <div className='project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated'>
//               <img src={project2} className=" img-fluid rounded float-left " alt="" />
//              </div>
//               <h3 className='m-4 heading'>Restaurant Management System</h3>

//             </div>

//             <div className='col-md-6'>
//               <div className='project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated'>
//               <img src={project3} className=" img-fluid rounded float-left " alt="" />
//              </div>
//               <h3 className='m-4 heading'>Ecommerce App Node js and React </h3>

//             </div>

//             <div className='col-md-6'>
//             <div className='project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated'>
//               <img src={project4} className=" img-fluid rounded float-left " alt="" />
//              </div>
//               <h3 className='m-4 heading'>Employee system with Mongo Db  </h3>
//             </div> */}

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

export default Project