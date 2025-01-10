import { body, validationResult } from 'express-validator';


export const getUpdateProductErrors = (req) => validationResult(req);

export const 