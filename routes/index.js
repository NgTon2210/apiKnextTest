const express = require('express')
const useController = require('../controller/user')
const router = express.Router()

router.get('/user', useController.user)
router.get('/create', useController.create)


module.exports = router