const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1> Syed Mustafa </h1>')
}).listen(8000, ()=>{console.log(`server is running on port 3000`)})