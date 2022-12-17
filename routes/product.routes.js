import express from 'express';
import productController from '../controllers/product.controller';
import authentication from '../middlewares/auth.middlewares';
import validator from '../validators/validator';
import { productValidator, priceValidator } from '../validators/product.validator';

const productRouter = express.Router();

productRouter.post('/newproduct', [authentication, validator(productValidator)], productController.create);
productRouter.post('/updateprice', [authentication, validator(priceValidator)], productController.updatePrice);
productRouter.get('/getbycategory', productController.getByCategory);
productRouter.delete('/deletebycategory', productController.deleteProductByCategory);
productRouter.delete('/delete', productController.deleteProduct);
