const dbConfig = require('../config/db')
const mongose = require('mongoose')
mongose.Promise = global.Promise;


const db = {}
db.mongose = mongose
db.url = dbConfig.url
db.employees = require('../models/employee.model.js')(mongose)

module.exports = db