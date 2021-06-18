const express = require('express')
const router = express.Router()
const {signup_get, signup_post, userByName, login_get, login_post, userById} = require('../controller/controller')

router.get('/user/signup',signup_get)
router.post('/user/signup',signup_post)
// router.get('/user/:email',userByName)
router.get('/user/:id',userById)
router.get('/user/login',login_get)
router.post('/user/login',login_post)

module.exports = router
