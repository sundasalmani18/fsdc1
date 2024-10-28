import React from 'react'
import portfoloioData from '../data/portfoliodata.json';
import axios from 'axios';
import  { useEffect, useState } from 'react';



const Banner = ({ bannerData }) => {
  // const [bannerData, setBannerData] = useState(null);


  // const fetchBannernData = async () => {
  //   const response = await axios.get('http://localhost:8080/portfolio');
  //   console.log(response.data[0].banner,"response")
  //   setBannerData(response.data[0].banner);
  // };


  // useEffect(() => {
  //   fetchBannernData();
  // }, []);
  // if (!bannerData) {
  //   return <div>Loading Banner...</div>;
  // }

  return (

        <div id="banner" className="py-2">
            <div className="container ">
               <div className="row  justify-content-center align-items-center ">
              <div className="col-md-8 mb-5">
                 <div id="banner_heading">
                  <p>{bannerData.title} <br />
                   {bannerData.name}</p>
                 <h2> {bannerData.designation}</h2>
                </div>
                   <div id="banner-button">
                   <button type="button" className="mt-2 px-5 py-3">{bannerData.resumelabel}</button>
                  </div>
                </div>
               </div>
             </div>
           </div>

  );
};




//json
// const Banner = () => {
//   const bannerData = portfoloioData.banner;
//   return (
//     <div id="banner" className="py-2">
//     <div className="container ">
//       <div className="row  justify-content-center align-items-center ">
//         <div className="col-md-8 mb-5">
//           <div id="banner_heading">
//             <p>{bannerData.title} <br />
//             {bannerData.name}</p>
//             <h2> {bannerData.designation}</h2>
//           </div>
//           <div id="banner-button">
//             <button type="button" className="mt-2 px-5 py-3">{bannerData.resumelabel}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }


export default Banner
