const { mongoose } = require("mongoose");

module.exports = mongoose => {
    const Employee = mongoose.model("employee", mongoose.Schema({
        name: String,
        salary: String,
        email: String
    }));

    return Employee
}