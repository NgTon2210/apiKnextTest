
const db = require('./../db/db')

module.exports.user = function(req, res){

    db.from('users').select("*")
    .then((err, response) => {
        if (err) throw err
        res.json(response)
    })

}

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
module.exports.create = async function(req, res){
    var users = await db('users').insert(req.body)
    res.json(users)
}