const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

var uploadPathFolderURL = path.join(__dirname, 'fileupload' + '/')

console.log('uploadPathFolderURL', uploadPathFolderURL)

const server = http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload[0].filepath;
      var newpath = uploadPathFolderURL + files.filetoupload[0].originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
})


server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080/ ...');
});