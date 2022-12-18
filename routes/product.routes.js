/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import productController from '../controllers/product.controller.js';
import authentication from '../middlewares/auth.middlewares.js';
import validator from '../validators/validator.js';
import { productValidator, priceValidator } from '../validators/product.validator.js';

const productRouter = express.Router();

productRouter.post('/newproduct', [authentication, validator(productValidator)], productController.create);
productRouter.post('/updateprice', [authentication, validator(priceValidator)], productController.updatePrice);
productRouter.get('/getbycategory', productController.getByCategory);
productRouter.delete('/deletebycategory', productController.deleteProductByCategory);
productRouter.delete('/delete', productController.deleteProduct);

export default productRouter;
