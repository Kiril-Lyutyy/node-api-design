import { validationResult } from 'express-validator';

export const handleInputErrors = (req, ) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400);
        return res.json({ errors: errors.array() });
    }
};