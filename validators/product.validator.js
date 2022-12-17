import Joi from 'joi';

export const productValidator = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required()
});

export const priceValidator = Joi.object().keys({
  price: Joi.number().required()
});

export default { productValidator, priceValidator };
