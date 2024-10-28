import React from 'react'
import portfoloioData from '../data/portfoliodata.json';
import axios from 'axios';
import  { useEffect, useState } from 'react';



const Skill = ({ skillDetails }) => {
    // const [skillData, setSkillData] = useState(null);
  
  
    // const fetchSkillData = async () => {
    //   const response = await axios.get('http://localhost:8080/portfolio');
    //   console.log(response.data[0].skills,"response")
    //   setSkillData(response.data[0].skills);
    // };
  
  
    // useEffect(() => {
    //     fetchSkillData();
    // }, []);
    // if (!skillData) {
    //   return <div>Loading skills...</div>;
    // }
  
    return (
  
             <div id="skill" >
            <div class="container ">
              
                <div class="row justify-content-center p-5">
                    <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h2 class="m-5" >{skillDetails.title}</h2>
                    </div>
                    <div className='row d-flex'>
                    {skillDetails.skill_details.length > 0 ? (skillDetails.skill_details.map((item, index) => (
                        <div className='col-md-6 mb-5'>
                            <div className='progress-wrap ftco-animate fadeInUp ftco-animated '>
                                <div className='skill_heading d-flex justify-content-between'>
                                <h4 className=''>{item.skill}</h4>
                                <h4 class="">{item.percent}</h4>
                                </div>                
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    
                                </div>

                            </div>

                        </div>
                        ))) : null} 
                        </div>
                        </div>
                        </div>
                        </div>
  
    );
  };

//json
// const Skill = () => {
//     const skillData=portfoloioData.skills;
//     const data=portfoloioData.skills.skill_details;
//     return (
//         <div id="skill" >
//             <div class="container ">
              
//                 <div class="row justify-content-center p-5">
//                     <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
//                         <h2 class="m-5" >{skillData.title}</h2>
//                     </div>
//                     <div className='row d-flex'>
//                     {data.length > 0 ? (data.map((item, index) => (
//                         <div className='col-md-6 mb-5'>
//                             <div className='progress-wrap ftco-animate fadeInUp ftco-animated '>
//                                 <div className='skill_heading d-flex justify-content-between'>
//                                 <h4 className=''>{item.skill}</h4>
//                                 <h4 class="">{item.percent}</h4>
//                                 </div>                
//                                 <div class="progress">
//                                     <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    
//                                 </div>

//                             </div>

//                         </div>
//                         ))) : null} 

//                         {/* <div className='col-md-6 mb-5'>
//                             <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
//                                 <div className=' skill_heading d-flex justify-content-between'>
//                                 <h4>JavaScript </h4>
//                                 <h4>75%</h4>
//                                 </div>
                               
//                                 <div class="progress">
//                                     <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                  
//                                 </div>

//                             </div>

//                         </div>
//                         <div className='col-md-6 mb-5'>
//                             <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
//                                 <div className='skill_heading d-flex justify-content-between'>
//                                 <h4>React </h4>
//                                 <h4>70%</h4>
//                                 </div>    
//                                 <div class="progress">
//                                     <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                   
//                                 </div>

//                             </div>

//                         </div>
//                         <div className='col-md-6 mb-5'>
//                             <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
//                                 <div className=' skill_heading d-flex justify-content-between'>
//                                 <h4>Node js </h4>
//                                 <h4>80%</h4>
//                                 </div>
                                
//                                 <div class="progress">
//                                     <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                 
//                                 </div>

//                             </div>

//                         </div>
//                         <div className='col-md-6 mb-5'>
//                             <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
//                                 <div className='skill_heading  d-flex justify-content-between'>
//                                 <h4>Database:My SQL/Mongo Db/Firebase </h4>
//                                 <h4>85%</h4>
//                                 </div>
//                                 <div class="progress">
//                                     <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                   
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='col-md-6 mb-5'>
//                             <div className='progress-wrap ftco-animate fadeInUp ftco-animated'>
//                                 <div className=' skill_heading d-flex justify-content-between'>
//                                 <h4>WordPress </h4>
//                                 <h4>75%</h4>
//                                 </div>
//                                 <div class="progress">
//                                     <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                  
//                                 </div>
//                             </div>
//                         </div> */}

//                     </div>
//                 </div>
//             </div>
//         </div>


//     )
// }

export default Skill