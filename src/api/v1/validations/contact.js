const Joi = require('joi');

module.exports = {
    create: {
        body: {
            name: Joi.string().required(),
            title: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required(),
            address: Joi.string().required(),
            company: Joi.string().required()
        }
    },
    load: {
        params: {
            contactId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }
    },
    update: {
        body: {
            name: Joi.string(),
            title: Joi.string(),
            email: Joi.string().email(),
            phone: Joi.string(),
            address: Joi.string(),
            company: Joi.string() 
        }
    }
}