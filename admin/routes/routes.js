const express = require('express')
// const { signup_post, signup_get, login_post } = require('../../userService/controller/controller')
const router = express.Router()
const {login_get,login_post,signup_get,signup_post,adminById } = require('../controller/controller')

router.get('/admin/login',login_get)
router.get('/admin/signup',signup_get)
router.post('/admin/login',login_post)
router.post('/admin/signup',signup_post)
router.get('/admin/adminById',adminById)



module.exports = router