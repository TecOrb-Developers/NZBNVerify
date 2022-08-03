const businessController = require('../../app/controllers/business');
const business = new businessController();
const express = require('express');
const router = express.Router();

//businessOwnerSignUpItSelf
router.post('/verifyNzbn', business.verifyNzbn);
module.exports = router;