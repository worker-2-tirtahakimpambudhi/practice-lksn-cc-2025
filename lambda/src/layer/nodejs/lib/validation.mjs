import Joi from 'joi';

export const todoModel = Joi.object({
    todo: Joi.string().min(5).required(),
    description: Joi.string()
});

