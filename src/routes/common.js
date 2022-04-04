
const express = require('express');
const requireLogIn = require('../middleware/requireLogIn');
const commonController = require('../controller/commonController');
const upload = require("../middleware/fileUploader");

const router = express.Router();


/* router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/testing-api', authController.test);
router.get('/generate_agora_token',requireLogIn, authController.agoraAuthTokenGenerator);*/
/* router.post('/create', commonController.createCompany);  */
router.get('/get-users', commonController.getUsers); 
router.get('/get-dashboard-data', commonController.dashboardData); 
router.get('/get-notifications', commonController.getNotifications); 
router.get('/get-unread-count', commonController.unreadCount); 
router.get('/update-notification/:id', commonController.updateUnread); 
router.post("/upload/leads", upload.single("file"), commonController.uploadFiles);

module.exports = router;
