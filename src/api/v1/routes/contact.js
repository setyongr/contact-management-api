const express = require('express');
const validate = require('express-validation');
const contactResource = require('../resources/contact');
const validator = require('../validations/contact')
const jwt = require("../../../config/jwt")
const router = express.Router();

router.use("/contact", jwt);

router.route("/contact")
    .get(contactResource.list)
    .post(validate(validator.create), contactResource.create);

router.route("/contact/:contactId")
    .get(contactResource.get)
    .put(validate(validator.update), contactResource.update)
    .delete(contactResource.remove);

router.param("contactId", validate(validator.load))
router.param("contactId", contactResource.load);

module.exports = router;