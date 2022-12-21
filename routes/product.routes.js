/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import productController from '../controllers/product.controller.js';
import authentication from '../middlewares/auth.middlewares.js';
import validator from '../validators/validator.js';
import {
  productValidator, priceValidator, categoryValidator,
  getByCategoryValidator, nameValidator, idValidator
} from '../validators/product.validator.js';

const productRouter = express.Router();

productRouter.post('/newproduct', [authentication, validator(productValidator)], productController.create);
productRouter.post('/updateprice', [authentication, validator(priceValidator)], productController.updatePrice);
productRouter.get('/getcategories', productController.getCategories);
productRouter.post('/updatecategory', [authentication, validator(categoryValidator)], productController.updateCategory);
productRouter.post('/updatename', [authentication, validator(nameValidator)], productController.updateName);
productRouter.get('/getbycategory', [authentication, validator(getByCategoryValidator)], productController.getByCategory);
productRouter.delete('/deletebycategory', [authentication, validator(categoryValidator)], productController.deleteProductByCategory);
productRouter.delete('/delete', [authentication, validator(idValidator)], productController.deleteProduct);

export default productRouter;
