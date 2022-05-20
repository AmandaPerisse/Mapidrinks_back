import Joi from "joi";

const signupSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    username: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.number().required(),
});

export default signupSchema;