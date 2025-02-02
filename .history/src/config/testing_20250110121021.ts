import merge from 'lodash.merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE || 'local';

let envConfig;

if (stage === 'production') {
    envConfig = require('./prod').default
} else if (stage === 'testing') {
    envConfig = require('testing')
}