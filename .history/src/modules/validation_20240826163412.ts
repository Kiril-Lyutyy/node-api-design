import { body, validationResult } from 'express-validator';

export const updateProductValidation = [, body('qty').isNumeric()];