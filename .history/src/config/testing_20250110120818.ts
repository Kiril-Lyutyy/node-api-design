import merge from 'lodash.merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE = process.env.STAGE || 'local';