import dbConfig from "../config/db.js"
import mongoose from "mongoose";
import createPortofolioModel from '../model/createPortofolio.model.js'
mongoose.Promise = global.Promise;


const db = {}
db.mongose = mongoose
db.url = dbConfig.url
db.portfolio = createPortofolioModel(mongoose)

export default db;