// const mongoose = require('mongoose');
import mongoose from "mongoose";




// Nav Schema
const navSchema = new mongoose.Schema({
    name: { type: String, required: true },
    button: { type: String, required: true },
    nav_li: [
        {
            title: { type: String, required: true },
            href: { type: String, required: true }
        }
    ]
});

// Banner Schema
const bannerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    resumelabel: { type: String, required: true }
});

// Education Schema
const educationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    education_details: [
        {
            degree: { type: String, required: true },
            title: { type: String, required: true },
            year: { type: String },
            position: { type: String, required: true }
        }
    ]
});

// Experience Schema
const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    experience_details: [
        {
            date: { type: String, required: true },
            designation: { type: String, required: true },
            position: { type: String, required: true },
            description1: { type: String },
            description2: { type: String },
            description3: { type: String },
            description4: { type: String }
        }
    ]
});

// Skills Schema
const skillsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    skill_details: [
        {
            skill: { type: String, required: true },
            percent: { type: String, required: true }
        }
    ]
});

// Project Schema
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    project_details: [
        {
            img: { type: String, required: true },
            title: { type: String, required: true }
        }
    ]
});

// Main Schema
const PortfolioSchema = new mongoose.Schema({
    nav: navSchema,
    banner: bannerSchema,
    education: educationSchema,
    experience: experienceSchema,
    skills: skillsSchema,
    project: projectSchema
});

// Create the model
// const PortfolioModel = mongoose.model('Portfolio', PortfolioSchema);

// module.exports = PortfolioModel;

const PortfolioModel= mongoose.model('Portfolio', PortfolioSchema);
export default PortfolioModel;