import { validationResult } from 'express-validator';


export const handleInputErrors = (req) => validationResult(req);

export const 