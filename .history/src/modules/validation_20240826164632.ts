import { body } from 'express-validator';

export const updateProductValidation = [
    body('name').isString()
];