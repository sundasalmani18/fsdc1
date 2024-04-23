const http = require('http');
const fs = require('fs');

http.createServer(function (req,res){
    fs.readFile('demo.html', (err,data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data);
        return res.end()
    })

    // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });

    //   fs.open('mynewfile2.txt', 'w', function (err, file) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });

    
// fs.writeFile('mynewfile2.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// fs.appendFile('mynewfile2.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// fs.writeFile('mynewfile2.txt', 'This is my Replaced text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });


// fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

fs.unlink('mynewfile1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});




}).listen(8000)


