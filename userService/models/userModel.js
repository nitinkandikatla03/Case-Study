const mongoose = require('mongoose')


//user Schema
const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required :true,
        unique : true,
        lowercase : true
    },
    password: {
        type : String,
        required : true,
        minlength : 8
    }
})

const User = mongoose.model('user',userSchema)
module.exports = User