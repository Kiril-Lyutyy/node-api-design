// EXPRESS JS implementation
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.json({ message: 'hello' })
    console.log('hello from express');
})

// PURE node js implementaion example
// const http = require('http');

// const server = http.createServer(async (req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('<h1>Home page!</h1>'); 
//     }
// })

// server.listen(3001, () => {
//     console.log('server is running on http://localhost:3001');
// })