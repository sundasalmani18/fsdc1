const http = require('http');
const url = require('url')
const dt = require('./myfirstmodule')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write(req.url)
    
    let queryParameter = url.parse(req.url, true).query;
    console.log(queryParameter)
    res.write(queryParameter.year + " " + queryParameter.day)
    res.end('\\n Hello worlllld' + dt.myDate() + " " + dt.addition(10,20));
}).listen(8000)

