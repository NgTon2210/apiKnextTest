
const {check, validationResult} = require('express-validator')
const db = require('./../db/db')
const bcrypt = require('bcryptjs');

//login
module.exports.login = ((req, res)=>{
    res.render('login')
})
module.exports.postlogin = (async(req, res)=>{
    let {email, password} = req.body
    const salt = await bcrypt.genSalt(10)
    const passworded = await bcrypt.hash(password, salt)

    const usercount = await db('acount').where({
        email: email
    }).count({count: '*'})
    
    if(usercount[0].count === 1){
        const userpass = await db.from('acount').select('password')
        // console.log(userpass[0].password)
         bcrypt.compare(password, userpass[0].password, (err, boolearn)=>{
           if(boolearn){
            return res.redirect('http://localhost:9000/')
           }
        })
       return
    }
 
    res.redirect('/login')
})

//register
module.exports.register = ((req, res)=>{
    res.render('register')
})

module.exports.postregister = (async (req, res)=>{
     let {email, password, re_password} = req.body
     if(password===re_password){
        const salt = await bcrypt.genSalt(10);
        const passworded = await bcrypt.hash(password, salt)
        
        await db('acount').insert({
            email:email,
            password: passworded
        })
        res.redirect('/login')
     }
})


//show user
module.exports.index = (async (req, res)=>{
    var users = await db.from('users').select("*")
    res.render('user',{
        users
    })
})



//add user
module.exports.add =   ((req, res)=>{
    res.render('add')
})
module.exports.postadd = (async(req, res)=>{

    let {user_name, user_email, user_address} = req.body;
    // const errors = validationResult(req)
    // if(!errors.isEmpty()){
    //    const alert = errors.array()
    //    res.render('/add',{
    //        alert
    //    })
    // }else{
        await db('users').insert({
            user_name,
            user_mail: user_email,
            user_address
        })
        
        res.redirect('/')
    }
 
    
)

//edit user
module.exports.edit =   (async(req, res)=>{
    let id = req.params.id;
    var users = await db('users').where({
        id: id
    })
   
    res.render('edit', {
        users
    })
})



module.exports.postedit = (async(req, res)=>{
 
    let id = req.params.id;
  
    await db('users').where('id',id).update({
        user_name: req.body.user_name,
        user_mail: req.body.user_email,
        user_address: req.body.user_address
    })

    res.redirect('/')
})




//delete user

module.exports.delete = ( async(req, res)=>{
    let id = req.params.id;
   
    await db('users').where('id',id).del()
    res.redirect('/')
})

//search

module.exports.search = (async(req, res)=>{
    let user = req.query.name
    let users  = await db('users').where({
        user_name:user
    })
    res.render('searchcontent',{
        users
    })
})

//panigation

module.exports.panigate =( async  (req, res)=>{
    let limit = 3

    let page = req.params.page || 1
 
    let pageStart = page*limit - limit

    let total = await db('users').count({count: '*'})
    let totalUser = (total[0].count)

    let totalPage = Math.ceil(totalUser/limit)

    let users = await db.select('*').from('users').limit(limit).offset(pageStart)

   
    res.render('test', {
        users,
        page,
        totalPage
    })
  
})



// module.exports.user = async function(req, res){

//     var users = await db.from('users').select("*")
//     res.json(users)
  
// }








// <% for (let i = 0; i < users.length; i++) { %>
//     <tr>
//         <td><%= users[i].id %></td>
//         <td><%= users[i].user_name %></td>
//         <td><%= users[i].user_email %></td>
//         <td><%= users[i].user_address %></td>
//     </tr>
// <%} %>







// const users = [
//     { user_name: 'Audi', user_mail:'tonn@gmai.com', user_address:"qwewe"},
//     { user_name: 'Volkswagen',user_mail:'tasdonn@gmai.com', user_address:"hn" }
// ]
// module.exports.userCreate = function(req, res){
//     db('users').insert(users).then(() => console.log("data inserted"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         users.destroy();
//     });
// }



// module.exports.create = async function(req, res){
//     var users = await db('users').insert(req.body)
//     res.json(users)
// }

