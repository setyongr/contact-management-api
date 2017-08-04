const express = require('express');
const validate = require('express-validation');
const authResource = require('../resources/auth');
const validator = require('../validations/auth')
const router = express.Router();


router.route('/auth/login')
    .post(validate(validator.login), authResource.authenticate);

router.route('/auth/register')
    .post(validate(validator.register), authResource.register);

router.route('/auth/refresh')
    .post(validate(validator.refresh), authResource.refresh);

module.exports = router;