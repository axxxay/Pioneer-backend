const express = require('express');
const web3Controller = require('../controllers/web3Controller');

const router = express.Router();

router.get('/eth-balance', web3Controller.getEthBalance);

module.exports = router;