const { findOne } = require('../models/userModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


//error handling
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
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

//JWT token 
const maxAge = 3 * 24 * 60 * 60
const createToken = (id, email) => {
    return jwt.sign({ id, email }, 'nitinS', {
        expiresIn: maxAge
    })
}


//user signup get

module.exports.signup_get = (req, res) => {
    // User.find({})
    // .then( (user) => {
    //     res.send(user)
    // })
    res.send("user signip post")
}


//user signup post

module.exports.signup_post = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        User.create(user)
            .then((user) => {
                console.log(user)
                const token = createToken(user._id, user.email)
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
                res.status(200).json({ message: "User Created Successfully!" });
            })
            .catch((err) => {
                res.status(401).json({ message: "Email already exist" });
            })
    } catch (err) {
        const errors = "page not found"
        res.status(400).json({ errors });
    }
}


// Find user by email
module.exports.userByName = async (req, res) => {
    const query = { email: req.params.email }
    const user = await User.findOne(query)
    console.log(user.email)
    res.json(user)
}

//Find user by id

module.exports.userById = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}


//user login get
module.exports.login_get = (req, res) => {
    res.send('user login get')
}


//user login post
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body
    console.log("bod", req.body.length);
    if (Object.keys(req.body).length === 0) 
        {
            res.status(205).json({ message: "Please enter all Fields" })
        }
    else {
            try {
                const user = await User.login(email, password)
                const token = createToken(user._id, user.email)
                res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
                res.status(200).json({ user: user._id });
            }
            catch (err) {
                const errors = handleErrors(err);
                const { email, password } = errors
                res.status(400).json({ message: email.length > 0 ? email : password });
            }
        }
    }