import express from 'express';
import productController from '../controllers/product.controller';
import authentication from '../middlewares/auth.middlewares';
const productRouter = express.Router();

productRouter.post('/newproduct', [authentication, ], productController.create);
