const Joi = require('joi');

module.exports = {
    login: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }
    },
    register: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
        }
    },
    refresh: {
        body: {
            email: Joi.string().email().required(),
            refreshToken: Joi.string().required()            
        }
    }
}