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
  
  // con.connect(function(err) {
  //   if (err) throw err;
  //   var sql = "DROP TABLE orderitems";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table deleted");
  //   });
  // });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

   


//orders_items
// var sql = "CREATE TABLE orderitems (order_item_id INT AUTO_INCREMENT PRIMARY KEY,order_id INT NOT NULL,menu_item_id INT NOT NULL,quantity INT,price DECIMAL(19,2),FOREIGN KEY (menu_item_id) REFERENCES menu(id),FOREIGN KEY (order_id) REFERENCES orders(order_id))";
// con.query(sql, function (err, result) {
// if (err) throw err;
// console.log("Table created");
// });

// var sql = "INSERT INTO orderitems(order_item_id,order_id,menu_item_id, quantity,price) VALUES ?";
//     var values =[
//       [1,"2","4","1", "200.00"],
//         [2,"4","5","2", "2000.00"],
//         [3,"3","6","2", "4000.00"],
//         [4,"2","5","1", "300.00"]           
//     ];
//       con.query(sql,[values] ,function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//       });


//orders
// var sql = "CREATE TABLE orders (order_id INT AUTO_INCREMENT PRIMARY KEY, order_type_id INT,employee_id INT ,order_time DATETIME, total_amount DECIMAL(10,2),FOREIGN KEY (order_type_id) REFERENCES order_types(order_type_id),FOREIGN KEY (employee_id) REFERENCES employee(employee_id))";
// con.query(sql, function (err, result) {
// if (err) throw err;
// console.log("Table created");
// });


// var sql = "INSERT INTO orders (order_id,order_type_id,employee_id, order_time,total_amount) VALUES ?";
//     var values =[
//       [1,"2","4","2024-05-02 12:00:00", "500.00"],
//         [2,"1","2","2024-04-20 12:00:00", "1000.00"],
//         [3,"1","1","2024-02-10 12:00:00", "2000.00"],
//         [4,"2","3","2024-01-02 12:00:00", "300.00"]           
//     ];
//       con.query(sql,[values] ,function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//       });



//order_type
// var sql = "CREATE TABLE order_types (order_type_id INT AUTO_INCREMENT PRIMARY KEY,order_type_name VARCHAR(255))";
// con.query(sql, function (err, result) {
// if (err) throw err;
// console.log("Table created");
// });

//insert order_type
// var sql = "INSERT INTO order_types (order_type_id,order_type_name) VALUES ?";
//     var values =[
//       [1,"dine-in"],
//       [2,"take away"]     
//     ];
//       con.query(sql,[values] ,function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//       });


//employee
// var sql = "CREATE TABLE employee (employee_id INT AUTO_INCREMENT PRIMARY KEY,full_name VARCHAR(255),position VARCHAR(255),phone_no VARCHAR(255),email VARCHAR(255),salary VARCHAR(255))";
// con.query(sql, function (err, result) {
// if (err) throw err;
// console.log("Table created");
// });
  
//insert employee
// var sql = "INSERT INTO employee (employee_id,full_name,position, phone_no,email,salary ) VALUES ?";
//     var values =[
//       [1,"ali","chef","1234567890","ali@gmail.com", "50000"],
//       [2,"ahemd","chef","1234567890","ahmed@gmail.com", "30000"],
//       [3,"aisha","waiter","1234567890","aisha@gmail.com", "560000"],
//        [4,"sana","chef","1234567890","sana@gmail.com", "20000"],
        
//     ];
//       con.query(sql,[values] ,function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//       });

    //testimonials
    // var sql = "CREATE TABLE testimonials (id INT AUTO_INCREMENT PRIMARY KEY,clientname VARCHAR(255),description VARCHAR(255),profession VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });


   //insert testimonials 
// var sql = "INSERT INTO testimonials (clientname,description,profession ) VALUES ?";
//     var values =[
//       ["ali","experienced","chef"],
//       ["ahemd","newly apoint","chef"],
//         ["aisha","junior","waiter"],
//         ["sana","senior","chef"],
        
//     ];
//       con.query(sql,[values] ,function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//       });

  //booking_table
    // var sql = "CREATE TABLE booking_table (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255),email VARCHAR(255),date DATETIME, no_of_people VARCHAR(255),request VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

  //book a table
  // var sql = "INSERT INTO booking_table (name,email,date,no_of_people,request) VALUES ?";
  //   var values =[
  //     ["ali","ali@gmail.com","2024-05-02 12:00:00","4","no any"],
  //     ["ahmed","ahmed@gmail.com","2024-08-18 5:00:00","4","no any"]
  //   ];
  //     con.query(sql,[values] ,function (err, result) {
  //       if (err) throw err;
  //       console.log("1 record inserted");
  //     });

    //category table 
    //  var sql = "CREATE TABLE category (category_id INT AUTO_INCREMENT PRIMARY KEY,category_name VARCHAR(255),category_image VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
   
    //insert category 
    // var sql = "INSERT INTO category (category_id,category_name,category_image) VALUES ?";
    // var values =[
    //   [1,"brekfast","https://thewholekitchen.com.sg/cdn/shop/files/the-whole-kitchen-individual-boxes-breakfast-muffin-granola-01_400x.jpg"],
    //   [2,"lunch","https://t3.ftcdn.net/jpg/02/02/07/56/360_F_202075610_MGQKkqilBtXnLwMtWlSDvFrrW2kbYYgl.jpg"],
    //   [3,"dinner","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fT1sWaUFfs0bSqkNATKSFmDaBBFgH6SEAw&s"],
    // ];
    //   con.query(sql,[values] ,function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    //   });


//menu table
    // var sql = "CREATE TABLE menu (id INT AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255),category_id int,price varchar(50),FOREIGN KEY (category_id) REFERENCES category(category_id))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });

// menu insert 
  // var sql = "INSERT INTO menu (product_name, category_id,price) VALUES ?";
  // var values =[
  //   ["aloo paratha","1","500.00"],
  //   ["chicken handi","3", "1000.00"],
  //   ["biryani","2", "2000.00"],
  // ];

  //   con.query(sql,[values] ,function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });


//insert user
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



