// backend/routes/api.js

const express = require('express');
const router = express.Router();
const { getAllNumbers, addNumber } = require('../controllers/numberController');

router.get('/numbers', getAllNumbers);
router.post('/numbers', addNumber);

module.exports = router;
