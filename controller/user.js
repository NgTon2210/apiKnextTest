
const db = require('./../db/db')

module.exports.index = (async (req, res)=>{
    var users = await db.from('users').select("*")
    res.render('user',{
        users
    })
})

module.exports.edit =   ((req, res)=>{
    res.render('edit')
})

module.exports.add =   ((req, res)=>{
    res.render('add')
})
module.exports.postadd = (async(req, res)=>{
  
    var user_name = req.body.user_name;
    var user_mail = req.body.user_mail;
    var user_address = req.body.user_address;
    console.log(user_name);
    console.log(user_mail);
    console.log(user_address);

    // await db('users').insert({user_name:user_name},{user_mail:user_mail},{user_address:user_address})
    // res.redirect('/')
    
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

