const { findOne } = require('../models/userModel')
const User = require('../models/userModel')


module.exports.user_get = (req,res) => {
    User.find({})
    .then( (user) => {
        res.send(user)
    })
}

module.exports.signup_post = (req,res) => {
    const { email , password } = req.body
    const user = User.create({ email , password })
    .then( (data) => {
        console.log(data)
        res.send(data)
    })
    
    
}


// Find user by email
module.exports.userByName = async (req,res) => {
    const query = { email : req.params.email}
    const user = await User.findOne(query)
    console.log(user.email)
    res.json (user)
}