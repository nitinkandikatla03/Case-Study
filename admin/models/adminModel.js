const mongoose = require('mongoose')


//admin Schema
const adminSchema = new mongoose.Schema({
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

const Admin = mongoose.model('adminDetail',adminSchema)
module.exports = Admin