export const updateProductValidation = [body('name').isString(), body('qty').isNumeric()];