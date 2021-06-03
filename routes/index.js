const express = require('express')
const useController = require('../controller/user')
const router = express.Router()

router.get('/', useController.index)

router.get('/edit/:id', useController.edit)
router.post('/edit/:id', useController.postedit)

router.get('/add', useController.add)
router.post('/add', useController.postadd)

router.get('/:id', useController.delete)

router.get('/user/search', useController.search)

// router.get('/user/:page', useController.panigate)

router.get('/user/page/:page', useController.panigate)

module.exports = router