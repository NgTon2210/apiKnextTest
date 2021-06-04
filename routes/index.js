const express = require('express')
const useController = require('../controller/user')

const {check, validationResult} = require('express-validator')
const router = express.Router()

router.get("/login", useController.login)
router.post("/login", useController.postlogin)

router.get("/register", useController.register)
router.post("/register", useController.postregister)

router.get('/', useController.index)

router.get('/edit/:id', useController.edit)
router.post('/edit/:id', useController.postedit)

router.get('/add', useController.add)
router.post('/add' ,[
    check('user_name', 'username does not Empty').not().isEmpty(),
    check(' user_name', 'username more than 6 degits').isLength({min:6}),

    check('user_mail', 'usermail does not empty').not().isEmpty(),
    check('user_mail', 'Invalid email').isEmail(),

    check('user_address', 'useraddress does not empty').not().isEmpty()
   
], useController.postadd)

router.get('/:id', useController.delete)

router.get('/user/search', useController.search)

// router.get('/user/:page', useController.panigate)

router.get('/user/page/:page', useController.panigate)

module.exports = router