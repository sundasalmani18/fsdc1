// const dbConfig = require('../config/db')
// const mongose = require('mongoose')
import dbConfig from "../config/db.js"
import mongoose from "mongoose";
import createEmployeeModel from '../models/createemployee.model.js'
mongoose.Promise = global.Promise;


const db = {}
db.mongose = mongoose
db.url = dbConfig.url
db.employees = createEmployeeModel(mongoose)

export default db;