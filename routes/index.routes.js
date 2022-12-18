/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import userRouter from './user.routes.js';
import productRouter from './product.routes.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
