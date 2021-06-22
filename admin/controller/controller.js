const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')

//error handling
const handleErrors = (err) => {
    console.log(err.message, err.code);
    var errors = { email: '', password: '' };
    // incorrect email
    if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
    }
    // incorrect password
    if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
    }
   
    return errors;
}

//create token
const maxAge = 3 * 24 * 60 * 60
const createToken = (id,email,userType) => {
    console.log(userType)
    return jwt.sign({id,email,userType}, 'nitinS', {
        expiresIn:maxAge
    })
}


//get all admins
// module.exports.admin_get = (req,res) => {
//     Admin.find({})
//     .then( (data) => {
//         res.send(data)
//     }) 
// }


//admin signup get
module.exports.signup_get = (req,res) => {
    res.send("signup page")
}

//admin signup post
module.exports.signup_post = (req,res) => {
    console.log(req.body)
    const adminObj = {
        email: req.body.email,
        password: req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    }
    
    try{
        Admin.create(adminObj)
        .then( (admin) => {
            const token  = createToken(admin._id,admin.email,admin.userType)
            res.cookie('jwt',token,{httpOnly: true,maxAge: maxAge*1000})
            res.status(200).json({ message: "admin Created Successfully!" });
        })
        .catch((err) => {
            res.status(401).json({ message: "Email already exist" });
        })
    }catch(err){
        const errors = "page not found"
        res.status(400).json({ errors });
    }
   
}

//find admin by id

module.exports.adminById = async (req,res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}


//admin login get
module.exports.login_get = (req,res) => {
    res.send('admin login get')
}

//admin login post
module.exports.login_post = async (req,res) => {
    const { email , password } = req.body
    console.log("bod",req.body);
    if (Object.keys(req.body).length === 0) 
    {
            res.status(205).json({message:"Please enter all Fields"})
    }
    else{
    try {
        const admin = await Admin.login(email, password)
        const token  = createToken(admin._id,admin.email,admin.userType)
        res.cookie('jwt',token,{httpOnly: true,maxAge: maxAge*1000})
        res.status(200).json({ admin: admin._id  });
    }
    catch (err) {
        const errors = handleErrors(err);
        const { email, password} =errors
        res.status(400).json({message: email.length>0?email:password });
    }
    }
}
