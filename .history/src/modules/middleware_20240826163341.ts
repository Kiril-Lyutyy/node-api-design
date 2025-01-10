

export const updateProductValidation = [, body('qty').isNumeric()];
export const getUpdateProductErrors = (req) => validationResult(req);

export const 