import { body } from 'express-validator';

export const updateProductValidation = [
    body('name').isString()
];

export const updateByIdValidation = [
    body('')
]