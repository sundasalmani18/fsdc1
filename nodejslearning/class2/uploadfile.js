var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var formidable = require("formidable");
var fs = require("fs");
var PORT = process.env.PORT || 6000

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req, res){
	res.render("form");
});
app.post("/fileupload" , function(req, res){
	var fileupload = req.body.filetoupload;
    var form =  new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
    	 var oldpath = files.fileupload.path;
         var newpath = "C:\Users\sundas\Documents\SundusLearning\fsdc1\nodejslearning\class2\fileupload"+files.fileupload.name;
         fs.rename(oldpath, newpath, function(err){
         	if(err)
         		console.log(err);
         	else{
                res.write("File Uploaded");
                res.end();
            }
         }); 
    });
});

app.listen(PORT, function(){
	console.log("Server started");
});


