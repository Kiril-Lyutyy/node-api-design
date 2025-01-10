import { body, isIn } from 'express-validator';

export const updateProductValidation = [
    body('name').isString()
];

export const updateByIdValidation = [
    body('title').optional(),
    body('body').optional(),
    body('version').optional(),
    isIn([
        body('status').equals('IN_PROGRESS'),
        body('status').equals('SHIPPED'),
        body('status').equals('DEPRECATED')
    ])
]

export const createUpdateValidation = [
    body('title').optional(),
    body('body').optional(),
    body('version').optional(),
]

export const updatePointByIdValidation = [
    body('name').optional().isString(),
    body('description').optional().isString(),
]

export const createPointByIdValidation = [
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
]