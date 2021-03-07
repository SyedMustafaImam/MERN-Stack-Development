const http = require('http');
const port =5080;
const server =  http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'})
    res.write("Mustafa");
    console.log(req.url);
    res.end();
})

server.listen(port,()=>{
    console.log(`listing on port ${port}`)
});