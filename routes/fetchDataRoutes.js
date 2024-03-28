const express = require('express');
const fetchDataController = require('../controllers/fetchDataController');
const authenticateToken = require('../middlewares/authenticationMiddleware');

const router = express.Router();

router.get('/fetch-data-from-public-api', authenticateToken, fetchDataController.fetchDataFromPublicAPI);

module.exports = router;