import http from 'http';

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode(200);
        res.writeHead(200, {'Content-Type', 'text/html'});
        res.end('Home page!'); 
    }
})