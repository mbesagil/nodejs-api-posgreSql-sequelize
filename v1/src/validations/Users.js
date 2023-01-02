const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(3),
  lname: Joi.string().required().min(3),
  password: Joi.string().required().min(8),
  email: Joi.string().email().required().min(8),
});


const loginValidation = Joi.object({
  password: Joi.string().required().min(8),
  email: Joi.string().email().required().min(8),
});

module.exports = {
  createValidation,
  loginValidation,
};
