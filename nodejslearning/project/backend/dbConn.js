import mysql from 'mysql';

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "restaurantdb"
})


// cjs export
// module.exports db = mysql.createConnection({
//     host: "",
//     user: "",
//     password: "",
//     database: ""
// })