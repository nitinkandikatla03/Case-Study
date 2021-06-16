const express = require('express')
const router = express.Router()
const {user_get, user_post, signup_post, userByName} = require('../controller/controller')

router.get('/',user_get)
router.post('/',signup_post)
router.get('/:email',userByName)

module.exports = router
