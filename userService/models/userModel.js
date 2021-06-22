const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



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
    },
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type : String,
        required : true
    },
    userType : {
        type : Boolean,
        default : false
    }

})


//fire function before saving to DB

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next()
})


// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password')    
    }
    throw Error('incorrect email')
        
    
};

const User = mongoose.model('user',userSchema)
module.exports = User