const http = require('http');
const fs = require('fs');
const mom = require('moment')
port = 8069;
const eid = '2022-12-25';
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    let route = './pages/'


    switch (req.url) {
        case '/':
            route += 'idex.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html'
            res.statusCode = 200;
            break;

        default:
            route += '404.html'
            res.statusCode = 404;

    }

    fs.readFile(route, (err, data) => {
        if (err) {
            console.log(err)
            console.log("Error");
            res.end();
        } else {

            res.write(data);
            res.end();
        }
    })

// console.log(eid);

}).listen(port, () => { console.log(`listing on port ${port}`) });