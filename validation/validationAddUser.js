const {check} = require('express-validator')

let validateAddUser = () =>{
    return [
        check('user_name', 'username does not Empty').not().isEmpty(),
        check(' user_name', 'username more than 6 degits').isLength({min:6}),

        check('user_mail', 'usermail does not empty').not().isEmpty(),
        check('user_mail', 'Invalid email').isEmail(),

        check('user_address', 'useraddress does not empty').not().isEmpty(),
       
    ]
}


module.exports = {validateAddUser}