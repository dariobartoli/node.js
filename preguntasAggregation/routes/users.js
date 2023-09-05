const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

router.post('/', usersController.add)
router.get('/', usersController.get)

module.exports = router;