const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts')
const logged = require('../middlewares/logged')

router.get('/', postController.getAll)
router.use(logged.userVerify)
router.post('/', postController.create)
router.put('/', postController.set)
router.delete('/', postController.delet)

module.exports = router
