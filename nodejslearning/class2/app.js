const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const userRoutes=require('./routes/user')
const emailRoutes=require('./routes/sendmail')
const mailtrapRoutes=require('./routes/mailtrapsendmail')
const uploadfilemulter=require('./uploadfilemulter')

const app = express();

const PORT = 5000;

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



