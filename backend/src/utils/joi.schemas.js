const Joi = require('joi');

const validateForm = (schema) => (data) => {
    const validation = schema.validate(data);

    if (validation.error) {
        throw new Error(validation.error);
    }
};

const userSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
});

module.exports = {
    userSchema,
    validateForm,
};