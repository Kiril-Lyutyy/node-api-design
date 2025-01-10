// EXPRESS JS implementation
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import router from './routes';
import { protect, signIn } from './modules/auth';
import { createNewUser } from './handlers/user';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use((req, _res, next) => {
//     req.my_secret = 'secret string 123';

//     next();
// })
app.use(cors());

app.post('/user', createNewUser);
app.post('/signin', signIn);
app.get('/', async (req, res) => {
    try {
        
    }
})

app.use('/api', protect, router);

app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({ message: 'unauthorized' });
    } else if (err.type === 'input') {
        res.status(400).json({ message: 'invalid input' });
    } else {
        res.status(500).json({ message: 'server error' });
    }
});

export default app;

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