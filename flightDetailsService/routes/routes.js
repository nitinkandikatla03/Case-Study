const express = require('express')
const router = express.Router()
const {flight_get,flight_post, flightByName,flightById} = require('../controller/controller')

router.get('/flight',flight_get)
router.post('/flight',flight_post)
router.get('/flight/:name',flightByName)
router.get('/flight/:id',flightById)


module.exports = router