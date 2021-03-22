const {
    json
} = require('body-parser');
const http = require('http');
const qs = require('querystring');

const routes = {

    'GET': {
        '/': (req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(`
            <h1> Form </h1>
            <form action="" method="POST">
                <input type="text" name="username" id="" placeholder="User Name"><br>
                <input type="password" name="password" id="" placeholder="password"><br>
                <input type="submit" value="submit" id="" ><br>
        </form>
            `)
            res.end()
        },
        '/about': (req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end('<h1> About US </h1>')
        }
    },
    'POST': {
        '/': (req, res) => {
            let body = '';
            req.on('data', data => {
                body += data;
            });
            req.on('end', () => {
                let params = qs.parse(body);
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(JSON.stringify(params));

            })

        }
    },
    'NA':(req,res)=>{
        res.writeHead(404, {'content-type':'text/html'})
        res.end(`<center><h1>Content not found Error404!</h1></center>`)
    }
}

const router = (req, res) => {
    // console.log('Requested Method :>> ', req.method);
    // console.log('Requested URL :>> ', req.url);
    // res.end()

    let resolveRoute = routes[req.method][req.url];
    if (resolveRoute != undefined) {
        resolveRoute(req, res)
    }
    else{
    routes['NA'](req,res)
}
}

http.createServer(router).listen(8000, () => {
    console.log(`server is running on port 3000`)
})