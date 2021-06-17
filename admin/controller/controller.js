const Admin = require('../models/adminModel')

module.exports.admin_get = (req,res) => {
    Admin.find({})
    .then( (data) => {
        res.send(data)
    }) 
}

module.exports.admin_post = (req,res) => {
    console.log(req.body)
    const obj = {
        email : req.body.email,
        password : req.body.password
    }
    const admin = Admin.create(obj)
    .then( (data) => {
        res.send(data)
    })
}

