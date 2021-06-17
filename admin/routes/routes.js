const express = require('express')
const router = express.Router()
const {admin_get,admin_post, admin_post1 } = require('../controller/controller')

router.get('/',admin_get)
router.post('/',admin_post)



module.exports = router