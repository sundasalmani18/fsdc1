const http = require('http');
const fs = require('fs');

http.createServer(function (req,res){
    fs.readFile('demo.html', (err,data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data);
        return res.end()
    })

    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
}).listen(8000)


