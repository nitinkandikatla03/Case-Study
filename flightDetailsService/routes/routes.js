const express = require('express')
const router = express.Router()
const {flight_get,flight_post, flightByName} = require('../controller/controller')

router.get('/',flight_get)
router.post('/',flight_post)
router.get('/:name',flightByName)

module.exports = router