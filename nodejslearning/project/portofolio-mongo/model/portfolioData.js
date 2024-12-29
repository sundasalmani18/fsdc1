// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// import createPortofolioModel from './createPortofolio.model';

// const MainModel = require('./models');

// const URI = 'your_connection_string_here'; // Replace with your MongoDB connection string

// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');

    // Example data based on your JSON structure
     export const  exampleData = {
      nav: {
        name: "Sundas Almani.",
        button: "Technical Support System",
        nav_li: [
          { title: "Education", href: "#education" },
          { title: "Experience", href: "#experience" },
          { title: "Project", href: "#project" },
          { title: "Skills", href: "#skill" }
        ]
      },
      banner: {
        title: "Hello",
        name: "I'm Sundas Almani",
        designation: "Full Stack Developer",
        resumelabel: "My Resume"
      },
      education: {
        title: "Education",
        education_details: [
          {
            degree: "Intermediate",
            title: "Group: Pre-Engineering",
            year: "2012-2013",
            position: "Hayat Girls College Hyd"
          },
          {
            degree: "Bachelor Degree",
            title: "Bachelor of Engineering in Software",
            position: "Mehran University Of Engineering and Technology"
          }
        ]
      },
      experience: {
        title: "Experience",
        experience_details: [
          {
            date: "March 2017-July 2017",
            designation: "Intern",
            position: "Verge System",
            description1: "Developed web applications using JavaScript, React, and Node.js",
            description2: "Assisted in the development of web applications.",
            description3: "Participated in code reviews and contributed to team meetings",
            description4: "Learned best practices in software development and version control"
          },
          {
            date: "2017-2018",
            designation: "Junior Developer",
            position: "Verge System",
            description1: "Developed and maintained web applications using JavaScript, HTML, and CSS",
            description2: "Collaborated with teams to design and implement new features",
            description3: "Optimized application performance and improved user experience"
          }
        ]
      },
      skills: {
        title: "My Skills",
        skill_details: [
          { skill: "HTML/CSS", percent: "90%" },
          { skill: "JavaScript", percent: "75%" },
          { skill: "React", percent: "70%" },
          { skill: "Node.js", percent: "80%" },
          { skill: "Database: MySQL/MongoDB/Firebase", percent: "85%" },
          { skill: "WordPress", percent: "75%" }
        ]
      },
      project: {
        title: "Projects",
        project_details: [
          { img: "../css/images/project1.png", title: "Redux Todo App With Firebase" },
          { img: "../css/images/project2.jpg", title: "Restaurant Management System" },
          { img: "../css/images/project3.png", title: "Ecommerce App Node.js and React" },
          { img: "../css/images/project4.png", title: "Employee System with MongoDB" }
        ]
      }
    };

    // Save the example data
  