import * as dotenv from 'dotenv';
dotenv.config();
import config from ''
import app from './server';

// handle uncaught errors here
process.on('uncaughtException', (e) => {
    console.log(e);
})

// handle uncaught async errors here
process.on('unhandledRejection', (e) => {
    console.log(e);
})

app.listen(config.port, () => {
    console.log('server is running on http://localhost:3001');
})