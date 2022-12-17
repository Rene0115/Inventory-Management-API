import Joi from 'joi';

const productValidator = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required()
});

export default productValidator;
