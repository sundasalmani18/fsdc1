const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');
const userRoutes=require('./routes/user')
const emailRoutes=require('./routes/sendmail')
const mailtrapRoutes=require('./routes/mailtrapsendmail')
const uploadfilemulter=require('./uploadfilemulter')


const app = express();

const PORT = 5000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database : "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

//orders_items
var sql = "CREATE TABLE orderItems (order_item_id INT AUTO_INCREMENT PRIMARY KEY,order_id INT NOT NULL,menu_item_id INT NOT NULL,quantity INT,price DECIMAL(19,2),FOREIGN KEY (menu_item_id) REFERENCES menu(id))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});


//orders
// var sql = "CREATE TABLE orders (order_id INT AUTO_INCREMENT PRIMARY KEY, order_type_id INT,employee_id INT ,order_time DATETIME, total_amount DECIMAL(10,2),FOREIGN KEY (order_type_id) REFERENCES order_types(order_type_id),FOREIGN KEY (employee_id) REFERENCES employee(employee_id))";
// con.query(sql, function (err, result) {
// if (err) throw err;
// console.log("Table created");
// });



//order_type
// var sql = "CREATE TABLE order_types (order_type_id INT AUTO_INCREMENT PRIMARY KEY,order_type_name VARCHAR(255))";
// con.query(sql, function (err, result) {
// if (err) throw err;
// console.log("Table created");
// });


//employee
// var sql = "CREATE TABLE employee (employee_id INT AUTO_INCREMENT PRIMARY KEY,full_name VARCHAR(255),position VARCHAR(255),phone_no VARCHAR(255),email VARCHAR(255),salary VARCHAR(255))";
// con.query(sql, function (err, result) {
// if (err) throw err;
// console.log("Table created");
// });
  


    //testimonials
    // var sql = "CREATE TABLE testimonials (id INT AUTO_INCREMENT PRIMARY KEY,clientname VARCHAR(255),description VARCHAR(255),profession VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });



  //booking_table
    // var sql = "CREATE TABLE booking_table (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255),email VARCHAR(255),date DATETIME, no_of_people VARCHAR(255),request VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });



    //category table 
    //  var sql = "CREATE TABLE category (category_id INT AUTO_INCREMENT PRIMARY KEY,category_name VARCHAR(255),category_image VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });


//menu table
    // var sql = "CREATE TABLE menu (id INT AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255),category_id int,price varchar(50),FOREIGN KEY (category_id) REFERENCES category(category_id))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });




    // var sql = "INSERT INTO users (name, designation) VALUES ('ali', 'chef')";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    // });



    //create table
    // var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), designation VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });



      //create database
    // let createDbQuery = "CREATE DATABASE mydb"
    // con.query(createDbQuery, function (err, result) {
    //     if (err) throw err;
    //     console.log("Result: " + result);
    //   });
  });





app.use('/user',userRoutes)
app.use('/sendmail',emailRoutes)
app.use('/mailtrapemail',mailtrapRoutes)
app.use('/uploadfilemulter',uploadfilemulter)


app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
})


app.post('/fileupload', (req, res) => {
    let uploadPathFolderURL = path.join(__dirname, 'fileupload' + '/')
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        let oldpath = files.filetoupload[0].filepath;
        let newpath = uploadPathFolderURL + files.filetoupload[0].originalFilename;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
})


app.listen(PORT, () => {
    console.log('Server is running', PORT)
})



