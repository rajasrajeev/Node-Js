const express = require('express');

const auth = require('./routes/auth');
const stocks = require('./routes/stocks');

const router = express.Router();

router.use('/auth', auth);
router.use('/stocks', stocks);



module.exports = router;
