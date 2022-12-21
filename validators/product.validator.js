import Joi from 'joi';

export const productValidator = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required()
});

export const priceValidator = Joi.object().keys({
  Id: Joi.string().required(),
  price: Joi.number().required()
});

export const categoryValidator = Joi.object().keys({
  Id: Joi.string().required(),
  category: Joi.string().required()
});

export default { productValidator, priceValidator };
