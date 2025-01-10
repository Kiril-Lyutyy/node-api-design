import http from 'http';

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home page!</h1>'); 
    }
})