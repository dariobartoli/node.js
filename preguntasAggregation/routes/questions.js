const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions')

router.post('/', questionsController.add)
router.get('/', questionsController.get)

module.exports = router;

