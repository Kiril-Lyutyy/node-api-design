import * as dotenv from 'dotenv';
dotenv.config();
import config from '../config'
import app from './server';

// handle uncaught errors here
process.on('uncaughtException', (e) => {
    console.log(e);
})

// handle uncaught async errors here
process.on('unhandledRejection', (e) => {
    console.log(e);
})

app.listen(3001, () => {
    console.log('server is running on http://localhost:3001');
})