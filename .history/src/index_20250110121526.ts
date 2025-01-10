import * as dotenv from 'dotenv';
dotenv.config();
import config from '../src/config'
import app from './server';

// handle uncaught errors here
process.on('uncaughtException', (e) => {
    console.log(e);
})

// handle uncaught async errors here
process.on('unhandledRejection', (e) => {
    console.log(e);
})

app.listen(con, () => {
    console.log('server is running on http://localhost:3001');
})