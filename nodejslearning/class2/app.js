const formidable = require('formidable');
const fs = require('fs');
const path = require('path');


const express = require('express');
const app = express();

const PORT = 5000;

const userRoutes=require('./routes/user')
app.use('/user',userRoutes)


const emailRoutes=require('./routes/sendmail')
app.use('/sendmail',emailRoutes)



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

app.get('/contact', (req, res) => {
    res.send('Hello Contact');
})


app.listen(PORT, () => {
    console.log('Server is running', PORT)
})



