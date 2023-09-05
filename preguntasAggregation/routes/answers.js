const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answers')

router.post('/', answersController.add)
router.get('/', answersController.get)


module.exports = router;