
const express = require('express');
const requireLogIn = require('../middleware/requireLogIn');
const authController = require('../controller/authController');

const router = express.Router();


router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;
