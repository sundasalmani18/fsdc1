import React from 'react'
import { useState } from 'react';
import DataFetcher from '../component/dataFetcher'
import Navbar from '../component/navbar';
import Banner from '../component/banner';
import Education from '../component/education';
import Experience from '../component/experience';
import Skill from '../component/skill';
import Project from '../component/project';
import Footer from '../component/footer';

const HomePage = () => {
    const [data, setData] = useState({});
    const [isLocalData, setIsLocalData] = useState(true);
  
    const toggleData = () => {
        setIsLocalData(!isLocalData);
    };
  
  return (
    <div className="App">
    {data.nav && <Navbar  navData={data.nav} toggleData={toggleData} isLocalData={isLocalData} />}
     <DataFetcher setData={setData} isLocalData={isLocalData} />
     {data.banner && <Banner bannerData={data.banner}/>}
     {data.education && <Education educationDetails={data.education}/>}
     {data.experience && <Experience experienceDetails={data.experience}/>}
     {data.skills && <Skill skillDetails={data.skills}/>}
     {data.project && <Project  projectDetails={data.project}/>}
     <Footer/>
    </div>
  )
}

export default HomePage