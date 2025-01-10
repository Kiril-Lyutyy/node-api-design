import { body } from 'express-validator';

export const updateProductValidation = [
    body('name').isString()
];

export const updateByIdValidation = [
    body('title').optional(),
    body('body').optional(),
    body('version').optional(),
    body('status').optional,
]