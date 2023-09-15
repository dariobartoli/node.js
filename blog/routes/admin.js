const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')
const logged = require('../middlewares/logged')

router.use(logged.userVerify)
router.use(logged.admin)

router.get('/', adminController.get)
router.post('/disabled/user', adminController.disabledUser)
router.post('/disabled/post', adminController.disabledPost)

module.exports = router;