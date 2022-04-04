
const express = require('express');
const requireLogIn = require('../middleware/requireLogIn');
const stocksController = require('../controller/stocksController');
const upload = require("../middleware/fileUploader");

const router = express.Router();


/* router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/testing-api', authController.test);
router.get('/generate_agora_token',requireLogIn, authController.agoraAuthTokenGenerator);*/
/* router.post('/create', commonController.createCompany);  */
router.get('/get-stocks/:key', requireLogIn, stocksController.searchStocks); 
router.get('/get--details/:id', requireLogIn, stocksController.stockDetails); 

module.exports = router;
