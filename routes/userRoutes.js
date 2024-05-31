const express = require('express');
const getCoinsByUserName = require('../controllers/users/getCoinsByUserName');
const updateUserCoins = require('../controllers/users/updateUserCoins');

const router = express.Router();

router.get('/:username/coins', getCoinsByUserName);
router.patch('/updateCoins', updateUserCoins);

module.exports = router;
