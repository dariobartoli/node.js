const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')
const logged = require('../middlewares/logged')

router.get('/all', usersController.getAll)
router.use(logged.userVerify)

router.get('/', usersController.get)


module.exports = router;