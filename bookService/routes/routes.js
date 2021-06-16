const express = require('express')
const router = express.Router()
const { bookDetails_get, bookDetails_post} = require('../controller/controller')

router.get('/',bookDetails_get)
router.post('/',bookDetails_post)

module.exports = router
