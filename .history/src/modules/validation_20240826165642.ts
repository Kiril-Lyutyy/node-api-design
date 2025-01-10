import { body, oneOf } from 'express-validator';

export const updateProductValidation = [
    body('name').isString()
];

export const updateByIdValidation = [
    body('title').optional(),
    body('body').optional(),
    body('version').optional(),
    oneOf([
        body('status').equals('IN_PROGRESS'),
        body('status').equals('SHIPPED'),
        body('status').equals('DEPRECATED')
    ])
]

export const create