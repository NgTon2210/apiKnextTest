const express = require('express')
const useController = require('../controller/user')
const router = express.Router()

router.get('/', useController.index)

router.get('/edit', useController.edit)

router.get('/add', useController.add)
router.post('/add', useController.postadd)




module.exports = router