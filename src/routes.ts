import { Router } from 'express';

import { paths } from './constants/routes';
import { 
    createPointByIdValidation, 
    createUpdateValidation, 
    updateByIdValidation, 
    updateCreateProductValidation, 
    updatePointByIdValidation, 
} from './modules/validation';
import { handleInputErrors } from './modules/middleware';
import { 
    createProduct, 
    deleteProduct, 
    getOneProduct, 
    getProducts, 
    updateProduct 
} from './handlers/products';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/updates';

const router = Router();

//PRODUCTS
//get all products
router.get(`${paths.product}`, getProducts)
//get product by id
router.get(`${paths.product}${paths.id}`, getOneProduct)
//create product
router.post(`${paths.product}`, updateCreateProductValidation, handleInputErrors, createProduct)
//update product by id
router.put(`${paths.product}${paths.id}`, updateCreateProductValidation, handleInputErrors, updateProduct)
//delete product by id
router.delete(`${paths.product}${paths.id}`, deleteProduct)

//UPDATES
router.get(`${paths.update}`, getUpdates)
//get product by id
router.get(`${paths.update}${paths.id}`, getOneUpdate)
//create product
router.post(`${paths.update}`, createUpdateValidation, handleInputErrors, createUpdate)
//update product by id
router.put(`${paths.update}${paths.id}`, updateByIdValidation, handleInputErrors, updateUpdate)
//delete product by id
router.delete(`${paths.update}${paths.id}`, deleteUpdate)

//UPDATE POINT
router.get(`${paths.updatePoint}`, () => {
})
//get product by id
router.get(`${paths.updatePoint}${paths.id}`, () => {
})
//create product
router.post(`${paths.updatePoint}`, () => {
})
//update product by id
router.put(`${paths.updatePoint}${paths.id}`, updatePointByIdValidation, handleInputErrors, () => {
})
//delete product by id
router.delete(`${paths.updatePoint}${paths.id}`, createPointByIdValidation, handleInputErrors, () => {
})

export default router;