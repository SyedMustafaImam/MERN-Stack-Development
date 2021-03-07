const http = require('http');
const fs = require('fs');

http.createServer(function (req,res){
    res.writeHead(200, {'content-type':'text/html'});
    fs.readFile('./testWebsite/index.html', (err,data)=>{
     if(err){console.log("Gone into error");}
     else{
            res.write(data);
            return res.end();
        }
    })


}).listen(8050);