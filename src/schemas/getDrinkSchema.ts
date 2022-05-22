import Joi from "joi";

const registerSchema = Joi.object({
    name: Joi.string().required(),
});

export default registerSchema;