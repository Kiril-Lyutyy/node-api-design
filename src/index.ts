import * as dotenv from 'dotenv';
dotenv.config();
import config from './config'
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
    if (process.env.NODE_ENV === 'development') {
        console.log(`The application is running on localhost:${config.port}`);
    } else {
        console.log(`The application is running in ${process.env.STAGE} mode on port ${config.port}`);
    }
})